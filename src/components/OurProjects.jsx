import React from 'react'
import Project from './Project'
import pro1 from '../assets/projects/2.png'
import pro2 from '../assets/projects/3.png'
import pro3 from '../assets/projects/4.png'
import pro4 from '../assets/projects/5.png'
import pro5 from '../assets/projects/6.png'
import pro6 from '../assets/projects/7.png'
import pro7 from '../assets/projects/8.png'
import pro8 from '../assets/projects/9.png'
import ProImg from './ProImg'

export default function OurProjects() {
  return (
    <div>
        <div class="mx-auto max-w-screen-xl pt-8 px-4 sm:pt-12  lg:py-24">
            <section >
                <h2 className="text-4xl font-bold md:text-5xl text-orange-500 text-center mb-16">
                Projects we are proud of
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ProImg Img={pro1}/>
                    <ProImg Img={pro2}/>
                    <ProImg Img={pro3}/>
                    <ProImg Img={pro4}/>
                    <ProImg Img={pro5}/>
                    <ProImg Img={pro6}/>
                    <ProImg Img={pro7}/>
                    <ProImg Img={pro8}/>
                </div>
            </section>
        </div>
    </div>
  )
}
