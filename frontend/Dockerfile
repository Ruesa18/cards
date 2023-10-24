# Base stage (used in development and production)
FROM whatwedo/yarn:v2.7 as base

# Development stage (depencencies and configuration used in development only)
FROM base as dev

COPY ./docker/dev/rootfs/etc /etc

# Install dde development depencencies
# .dde/configure-image.sh will be created automatically
COPY .dde/configure-image.sh /tmp/dde-configure-image.sh
ARG DDE_UID
ARG DDE_GID
RUN /tmp/dde-configure-image.sh

WORKDIR /var/www

EXPOSE 3000

# Production stage (depencencies and configuration used in production only)
FROM dev as prod

ADD . /var/www
