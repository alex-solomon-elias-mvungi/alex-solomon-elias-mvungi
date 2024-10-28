import Link from "next/link"

export default function Nav() {
    return (
            <div className="bg-stone-500 w-full h-9 flex flex-row justify-between content-center">
                <div className="flex content-center self-center font-bold mx-2 w-full">
                <div>
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

                <div className="flex ml-auto">
                    <nav>
                        <ul>
                             <li className="flex self-end mx-2 font-bold">
                            <Link href={{
                                pathname:'/home/kazizangu'
                            }}>Kazizangu</Link>
                        </li>
                        </ul>
                    </nav>
                </div>

            </div>
            
            </div>
    )
}