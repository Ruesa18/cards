import { Component } from 'react';
import './Courses.scss';
import { CourseRepository } from '../repositories/CourseRepository';
import { CourseDto } from '../dtos/CourseDto';
import { CourseBox } from './CourseBox';

export class Courses extends Component<{}, {courses: CourseDto[]}> {
    constructor(props: Readonly<Object> | Object) {
        super(props);

        this.state = {
            courses: []
        }
    }

    render() {
        let courseRepository = new CourseRepository();
        courseRepository.findAll<CourseDto>().then((res: CourseDto[]) => {this.setState({courses: res})});

        return(
            <div>
                <h1> Courses </h1>

                <div className="grid">
                    {this.state.courses.length > 0 ? this.state.courses.map(course => ( 
                        <CourseBox id={"" + course.id} name={course.name} languageA={course.languageA} languageB={course.languageB} creator={course.creator}></CourseBox>
                    )) : (
                        <div className='notice'>No courses available</div>
                    )}
                </div>
            </div>
        )
    }
}
export default Courses;
