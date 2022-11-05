<?php

namespace App\DataFixtures;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\LanguageFixtures;
use App\Entity\Course;

class CourseFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        foreach(
			[
				['name' => 'French For Beginners', 'creator' => '', 'languageFrom' => $this->getReference('language_german'), 'languageTo' => $this->getReference('language_french')]
			] as $course
		) {
			$courseEntity = new Course();
			$courseEntity->setName($course['name']);
			$courseEntity->setCreator($course['creator']);
			$courseEntity->setLanguageFrom($course['languageFrom']);
			$courseEntity->setLanguageTo($course['languageTo']);
			$manager->persist($courseEntity);
		}

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [LanguageFixtures::class];
    }
}
