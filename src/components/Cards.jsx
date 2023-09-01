import Card from './Card/Card'

export default function Cards({characters,key,onClose}) {
   return <div>
      {
         characters.map(({id,name,status,species,gender,image,origin})=>{
            return <Card
            key={id}
            id={id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            image={image}
            origin={origin.name}
            onClose={onClose}
            />
         })
      }
   </div>;
}
