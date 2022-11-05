<?php

namespace App\Entity;

use App\Repository\LanguageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LanguageRepository::class)]
class Language
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'languageFrom', targetEntity: Course::class)]
    private Collection $coursesFromLanguage;

	#[ORM\OneToMany(mappedBy: 'languageTo', targetEntity: Course::class)]
	private Collection $coursesToLanguage;

    public function __construct()
    {
        $this->courses = new ArrayCollection();
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

    /**
     * @return Collection<int, Course>
     */
    public function getCoursesFromLanguage(): Collection
    {
        return $this->coursesFromLanguage;
    }

	/**
     * @return Collection<int, Course>
     */
	public function getCoursesToLanguage(): Collection
    {
        return $this->coursesToLanguage;
    }
}
