<?php

namespace App\Entity;

use App\Repository\CourseRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CourseRepository::class)]
#[ORM\Table(name: "course")]
#[ORM\HasLifecycleCallbacks]
class Course
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $creator = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $create_date = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $update_date = null;

    #[ORM\ManyToOne(inversedBy: 'coursesFromLanguage')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Language $languageFrom = null;

    #[ORM\ManyToOne(inversedBy: 'coursesToLanguage')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Language $languageTo = null;

	public function __construct() {
		$this->setCreateDate(new \DateTime());
	}

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreator(): ?string
    {
        return $this->creator;
    }

    public function setCreator(string $creator): self
    {
        $this->creator = $creator;

        return $this;
    }

    public function getCreateDate(): ?\DateTimeInterface
    {
        return $this->create_date;
    }

    public function setCreateDate(\DateTimeInterface $create_date): self
    {
        $this->create_date = $create_date;

        return $this;
    }

    public function getUpdateDate(): ?\DateTimeInterface
    {
        return $this->update_date;
    }

    public function setUpdateDate(\DateTimeInterface $update_date): self
    {
        $this->update_date = $update_date;

        return $this;
    }

    public function getLanguageFrom(): ?Language
    {
        return $this->languageFrom;
    }

    public function setLanguageFrom(?Language $language): self
    {
        $this->languageFrom = $language;

        return $this;
    }

    public function getLanguageTo(): ?Language
    {
        return $this->languageTo;
    }

    public function setLanguageTo(?Language $language): self
    {
        $this->languageTo = $language;

        return $this;
    }
	
	#[ORM\PrePersist]
	#[ORM\PreUpdate]
    public function updatedTimestamps()
    {
        $this->setUpdateDate(new \DateTime('now'));

        if ($this->getCreateDate() == null) {
            $this->setCreateDate(new \DateTime('now'));
        }
    }
}
