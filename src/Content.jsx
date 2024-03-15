import Student from "./Student";

import { useState } from "react";

export default function Content() {
  

  const [students, setStudents] = useState(() => {
    return [
      {
        id: 1,
        name: "Niko Herbias",
        email: "nikoherbias6gmail.com",
        img: "./src/assets/profile.jpg",
      },
      {
        id: 2,
        name: "Herbias Niko",
        email: "nikoherbias6gmail",
        img: "./src/assets/profile.jpg",
      },
      {
        id: 3,
        name: "Niko Herbias",
        email: "nikoherbias6gmail.com",
        img: "./src/assets/profile.jpg",
      },
      {
        id: 4,
        name: "Herbias Niko",
        email: "nikoherbias6gmail",
        img: "./src/assets/profile.jpg",
      },
      {
        id: 5,
        name: "Niko Herbias",
        email: "nikoherbias6gmail.com",
        img: "./src/assets/profile.jpg",
      },
    ];
  });

  return (
    <div className="component">
      {/* mura rani siyag for loop neks kalahian lang is wa siyay (int i: i < list.length; i++) 
        mao sad niy recommended sa react(map) basta mag return jud kag component 
      */}
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            img={student.img}
            name={student.name}
            email={student.email}
          />
        );
      })}
    </div>
  );
}
