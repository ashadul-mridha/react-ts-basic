import React from "react";
type personListProps = {
  personList: {
    name: string;
    age: number;
  }[];
};

// interface personListProps {
//   personList: {
//     name: string;
//     age: number;
//   }[];
// };

// export default function PersonList : React.FC<personListProps> ({ personList }) {
//   return (
//     <div>
//       {personList.map((person) => {
//         return <h3 key={person.name}>{person.name}</h3>;
//       })}
//     </div>
//   );
// }

const PersonList: React.FC<personListProps> = ({ personList }) => {
  return (
    <div>
      {personList.map((person) => {
        return <h3 key={person.name}>{person.name}</h3>;
      })}
    </div>
  );
};

export default PersonList;
