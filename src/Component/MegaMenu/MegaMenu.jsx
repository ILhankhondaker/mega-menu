// import React from 'react';

import { Link } from "react-router-dom";

const MegaMenu = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                            {/* cutom  menu & sub menu start */}
                            <li className="dropdown">
                                <label tabIndex={0} className="btn m-1">Our Product</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                    <li><a>Flat</a></li>
                                    <li><a>Jersey</a></li>
                                    <li><a>Deven</a></li>
                                    <li><a>Jute Product</a></li>

                                    <li tabIndex={0}>
                                        <details>
                                            <summary>Human Hear Wigs</summary>
                                            <ul className="p-2">

                                                {/* man  */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Men</summary>
                                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                            <li className=""><a>Patch</a></li>
                                                            <li><a className="">Full Wig</a></li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* women */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Women</summary>
                                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                            <li><a>Patch</a></li>
                                                            <li><a>Full Wig</a></li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* Expension  */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Expension</summary>
                                                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                            <li><a>Tape</a></li>
                                                            <li><Link to="/about">Clip</Link></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>



                    {/* larg device  */}
                    <Link className="btn btn-ghost normal-case text-xl" to="/" > Mega Menu</Link>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>


                        {/* about */}
                        <li tabIndex={0}>
                            <details>
                                <summary >About us </summary>
                                <ul className="p-2">

                                    <li><a>Patch</a></li>
                                    <li><a>Full Wig</a></li>
                                    <li><a>Full Wig</a></li>
                                    <li><a>Full Wig</a></li>
                                </ul>
                            </details>
                        </li>



                        {/* another about  */}
                        <li className="dropdown">
                            <label tabIndex={0} className="btn m-1">about us </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><Link to="/about">go about</Link></li>

                                <li tabIndex={0}>
                                    <details>
                                        <summary>Men</summary>
                                        <ul className="p-2">

                                            <li className="w-20"><a >Patch</a></li>
                                            <li><a className="w-20">Full Wig</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>


                        {/* customize menu  */}
                        <li tabIndex={0}>
                            <details>
                                <summary>Our </summary>
                                <ul className="p-2">
                                    <li><a>Flat</a></li>
                                    <li><a>Jersey</a></li>
                                    <li><a>Deven</a></li>
                                    <li><a>Jute Product</a></li>

                                    <li tabIndex={0}>
                                        <details>
                                            <summary>Human Hear Wigs</summary>
                                            <ul className="p-2">

                                                {/* man  */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Men</summary>
                                                        <ul className="p-2">

                                                            <li className="w-20"><a>Patch</a></li>
                                                            <li><a className="w-20">Full Wig</a></li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* women */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Women</summary>
                                                        <ul className="p-2">

                                                            <li><a>Patch</a></li>
                                                            <li><a>Full Wig</a></li>
                                                        </ul>
                                                    </details>
                                                </li>

                                                {/* Expension  */}
                                                <li tabIndex={0}>
                                                    <details>
                                                        <summary>Expension</summary>
                                                        <ul className="p-2">

                                                            <li><a>Tape</a></li>
                                                            <li><a>Clip</a></li>
                                                        </ul>
                                                    </details>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>

                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>


                        {/* cutom  menu & sub menu start */}
                        <li className="dropdown">
                            <label tabIndex={0} className="btn m-1">Our Product</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                <li><a>Flat</a></li>
                                <li><a>Jersey</a></li>
                                <li><a>Deven</a></li>
                                <li><a>Jute Product</a></li>

                                <li tabIndex={0}>
                                    <details>
                                        <summary>Human Hear Wigs</summary>
                                        <ul className="p-2">

                                            {/* man  */}
                                            <li tabIndex={0}>
                                                <details>
                                                    <summary>Men</summary>
                                                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                        <li className=""><a>Patch</a></li>
                                                        <li><a className="">Full Wig</a></li>
                                                    </ul>
                                                </details>
                                            </li>

                                            {/* women */}
                                            <li tabIndex={0}>
                                                <details>
                                                    <summary>Women</summary>
                                                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                        <li><a>Patch</a></li>
                                                        <li><a>Full Wig</a></li>
                                                    </ul>
                                                </details>
                                            </li>

                                            {/* Expension  */}
                                            <li tabIndex={0}>
                                                <details>
                                                    <summary>Expension</summary>
                                                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                                                        <li><a>Tape</a></li>
                                                        <li><Link to="/about">Clip</Link></li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;