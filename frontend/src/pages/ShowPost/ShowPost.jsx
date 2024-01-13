import React from 'react'
import Post from '../../components/Post/Post'

const ShowPost = () => {


        const posts =[
            {id:1,
            title:"Web Devlopment",
            description :"Your vision, our code: We collaborate with you to create a website that perfectly reflects your brand",
            image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
            CreatedDate : "2022/12/12"
        },
        {id:2,
            title:"Mobile App Development",
            description :"We make technology disappear, leaving only delight: Creating intuitive and enjoyable mobile experiences",
            image:"https://sg1.gffoodservice.com.au/content/uploads/2020/02/article-hero-banner-food_trends-@1x.jpg"    ,
            CreatedDate : "2022/12/12"

        },
        {id:3,
            title:"UI/UX Design",
            description :"Simplify the complex, elevate the mundane. We make technology disappear, leaving only delight",
            image:"https://i.insider.com/622b74d18f97ab0018750b1b?width=700"    ,
            CreatedDate : "2022/12/12"

        },
            {id:4,
                title:"CV Writing",
                description :"Land your dream job: Our expert CV writers will help you craft a resume that gets noticed",
                image:"https://i.insider.com/622b74d18f97ab0018750b1b?width=700",
                CreatedDate : "2022/12/12"

            }
                ,{id:5,
                    title:"Graphic Design",
                    description :"Make a lasting impression: Our eye-catching designs will help you stand out from the competition",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mYRDm5y9Vv2a1jffnzxWfzOApn_48ZP0rM9tCAJeoycdUCnpqaLXSpmZksz1KZCHbwA&usqp=CAU"  ,  
                    CreatedDate :"2022/12/12"

                },
                ,,
                {id:6,
                    title:"Acedamic Report ",
                    description :"Simplifying the complex, elevating the mundane: Making research accessible and impactful.",
                    image:"https://i.insider.com/622b74d18f97ab0018750b1b?width=700" ,   
                    CreatedDate :"2022/12/12"

                },
               
            ]
  return (
    <div>
    <h1>Your Posts</h1>
    <Post posts={posts} />
  </div>
  )
}

export default ShowPost