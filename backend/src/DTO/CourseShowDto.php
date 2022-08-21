<?php
namespace App\DTO;

use App\Entity\Course;

class CourseShowDto {

    public int $id;
    public string $name;
    public string $creator;
    public string $language_a;
    public string $language_b;

    public function __construct(Course $course) {
        $this->id = $course->getId();
        $this->name = $course->getName();
        $this->creator = $course->getCreator();
        $this->language_a = $course->getLanguageA()->getName();
        $this->language_b = $course->getLanguageB()->getName();
    }
}

?>