import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'




/*
we want to put all our page links into one place o we can easily
modify or access them without having to hard code them
* We are looking for the data that is repeating and changing
*
*
*  */

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},

];

export const socialLinks = [
    {
        id:'1' ,
        href: 'https://www.twitter.com',
        icon: 'fab fa-facebook'

    },
    {
        id:'2' ,
        href: 'https://www.twitter.com',
        icon: 'fab fa-twitter'

    },
    {
        id:'3' ,
        href: 'https://www.twitter.com',
        icon: 'fab fa-squarespace'

    },
]

export const services = [
    {
        id:1 , icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate, tempore reiciendis sit ipsum consequatur!'
    },
    {
        id:2 , icon: 'fas fa-tree fa-fw', title: 'endless biking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate, tempore reiciendis sit ipsum consequatur!'
    },
    {
        id:3 , icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cupiditate, tempore reiciendis sit ipsum consequatur!'
    },

]

export const tours = [
    {id: 1, image: tour1, date: 'august 26th, 2023', title: 'tibet adventure', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.', location: 'China', duration: 6, cost: 2100},

    {id: 2, image: tour2, date: 'October 11th, 2023', title: 'Best of Java', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.', location: 'Indonesia', duration: 11, cost: 1400},

    {id: 3, image: tour3, date: 'september 15th, 2023', title: 'tibet adventure', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.', location: 'Hong kong', duration: 8, cost: 5000},

    {id: 4, image: tour4, date: 'December 5th, 2023', title: 'tibet adventure', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.', location: 'China', duration: 20, cost: 3300},
]