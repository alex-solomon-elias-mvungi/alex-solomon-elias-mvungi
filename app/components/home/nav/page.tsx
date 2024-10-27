import Link from "next/link"

export default function Nav() {
    return (
            <div className="bg-stone-500 w-full h-9 flex flex-row justify-between content-center">
                <div className="content-center font-bold mx-2">
                    <Link href={{
                        pathname:'/'
                    }}>lEVAI</Link>
                </div>

                <nav  className="flex content-center">
                    <ul className="flex flex-row">
                        <li className="flex self-center mx-2 font-bold">
                            <Link href={{
                                pathname:'/home/huduma'
                            }}>Huduma</Link>
                        </li>

                         <li className="flex self-center mx-2 font-bold">
                            <Link href={{
                                pathname:'/home/shuhuda'
                            }}>Shuhuda</Link>
                        </li>

                         <li className="flex self-center mx-2 font-bold">
                            <Link href={{
                                pathname:'/home/mimi'
                            }}>Kuhusu Mimi</Link>
                        </li>

                         <li className="flex self-center mx-2 font-bold">
                            <Link href={{
                                pathname:'/home/mawasiliano'
                            }}>Mawasiliano</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}