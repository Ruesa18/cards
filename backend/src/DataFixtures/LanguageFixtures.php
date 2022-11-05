<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Language;

class LanguageFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
		foreach(
			[
				["name" => "german"],
				["name" => "english"],
				["name" => "french"]
			] as $language
		) {
			$languageEntity = new Language();
			$languageEntity->setName(12);//$language['name']);
			$manager->persist($languageEntity);
			$this->addReference('language_' . $language['name'], $languageEntity);
		}
        $manager->flush();
    }
}
