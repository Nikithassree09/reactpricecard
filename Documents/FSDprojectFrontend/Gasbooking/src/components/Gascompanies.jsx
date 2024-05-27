import { useLoaderData, Link } from "react-router-dom"
export default function GasCompanies() {
    const gascompanies = useLoaderData()
    return (
        <div className="gascompanies">
        {gascompanies.map(GasCompany => (
            <Link to="/" key={GasCompany.id}>
                <p>{GasCompany.name}</p>
                <p>{GasCompany.location}</p>
            </Link> 
        ))}
        </div>
    )
}

export const Gascompanyloader = async () => {
   const res = await fetch('http://localhost:3000/Gas%20companies')

   return res.json()
}
