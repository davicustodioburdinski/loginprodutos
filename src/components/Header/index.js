import React from "react";
import { AreaHeader } from './styled';


function Header() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    LOGOMARCA
                </div>

                <nav>
                    <ul>
                        <li>
                            Produtos
                        </li>
                        <li>
                            Sair
                        </li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header