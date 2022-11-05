<?php
namespace App\Controller;

use App\Entity\Course;
use App\Repository\CourseRepository;
use App\DTO\CourseShowDto;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;

#[Route('/api')]
class CourseController extends AbstractController {

    public function __construct(private ManagerRegistry $doctrine) {}

    #[Route("/course", name: "course_list", methods: ["GET"])]
    public function index(): JsonResponse {
        $courses = $this->doctrine->getRepository(Course::class)->findAll();

        $dtos = [];
        foreach($courses as $course) {
            array_push($dtos, new CourseShowDto($course));
        }

        return new JsonResponse($dtos);
    }
}

?>
