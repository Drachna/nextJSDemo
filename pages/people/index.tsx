import Link from "next/link";



export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { people: data }
  }
}

type person={
  id:string,
  name:string
}

type Props = {
  people: [person]
};
const people = ({ people }: Props) => {
  return (
    <div>

      {people.map(person => {
        return (
          <Link href={'/people/' + person.id} key={person.id}>
            <a >
              <h3>{person.name}</h3>
            </a>
          </Link>
        )
      })}


    </div>
  );
};
export default people