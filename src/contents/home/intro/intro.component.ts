import { Component } from '@angular/core';
@Component({
  selector: 'content-intro',
  standalone: true,
  template: `
    <section class="my-12 w-full flex flex-wrap">
      <div id="about-left" class="w-full md:w-1/2 px-2 flex justify-center md:justify-start">
        <span class="w-5/6 h-[400px] bg-red-500 flex rounded-3xl"></span>
      </div>
      <div id="about-right" class="w-full md:w-1/2 px-2 flex flex-col mt-4 md:mt-0">
        <h2 class="text-2xl font-bold text-white py-2 md:pl-4 text-center md:text-left">
          A Brief About Me
        </h2>
        <p class="text-white/80 text-md">
          As a full-stack developer at EMGE Resources Ltd., I contribute to the
          development of innovative and user-friendly web and mobile
          applications for various industries, such as Fin-Tech, ride-hire,
          eCommerce, and logistics. I use gRPC and GraphQL to create efficient
          and reliable APIs and data layers, and I apply my UI design skills to
          ensure a smooth and engaging user experience.
        </p>

        <p class="text-white/80 text-md pt-4">
          With more than five years of professional software engineering
          experience, I have worked on several projects that involved complex
          functionalities, such as hospital management systems, IoT embedding,
          and cloud computing. I am always eager to learn new technologies and
          frameworks, and I enjoy collaborating with other developers and
          stakeholders to implement ideas and solve problems. My goal is to
          create software solutions that meet the needs and expectations of the
          clients and users, while driving business profitability and growth.
        </p>
      </div>
    </section>
  `,
})
export class IntroComponent {}
