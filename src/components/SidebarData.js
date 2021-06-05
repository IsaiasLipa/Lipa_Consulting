import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc'

export const SidebarData = [

    {
        title:'Home',
        path:'/',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },

    {
        title:'Taxes',
        path:'/taxes',
        icons: <FcIcons.FcMoneyTransfer/>,
        cName: 'nav-text'

    },

    {
        title:'Notarization',
        path:'/notarization',
        icons: <FcIcons.FcDocument/>,
        cName: 'nav-text'

    },

    {
        title:'Immigration',
        path:'/immigration',
        icons: <FaIcons.FaGlobeAmericas/>,
        cName: 'nav-text'

    },
    {
        title:'About',
        path:'/about',
        icons: <FcIcons.FcInfo/>,
        cName: 'nav-text'

    }
    
]