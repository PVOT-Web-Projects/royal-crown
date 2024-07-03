import image1 from "@/images/decorative1.png";
import image2 from "@/images/decorative2.png";
import image3 from "@/images/decorative3.png";
import logo1 from "@/images/xylem.png";
import logo2 from "@/images/crown.png";
import CategoryLeftRightItem from "./categoryLeftRightItem.jsx/CategoryLeftRightItem";
import "./categoryLeftRight.scss"

const categoryLeftRightData = [
    {
        title:"DECORATIVE LAMINATES",
        text:"Our Decorative Laminates are produced by impregnating multitude of papers including tissue paper, decor paper, barrier paper, kraft paper with resin. The resulting sandwich is fused underheat and pressure. The fusion process creates strong bonds that contribute to our laminates'exceptional durability. ",
        url:"/",
        image1:image1,
        image2:image2,
        image3:image3,
        logo1:logo1,
        logo2:logo2,
    },
    {
        title:"DECORATIVE LAMINATES",
        text:"Our Decorative Laminates are produced by impregnating multitude of papers including tissue paper, decor paper, barrier paper, kraft paper with resin. The resulting sandwich is fused underheat and pressure. The fusion process creates strong bonds that contribute to our laminates'exceptional durability. ",
        url:"/",
        image1:image1,
        image2:image2,
        image3:image3,
        logo1:logo1,
        logo2:logo2,
    },
    {
        title:"DECORATIVE LAMINATES",
        text:"Our Decorative Laminates are produced by impregnating multitude of papers including tissue paper, decor paper, barrier paper, kraft paper with resin. The resulting sandwich is fused underheat and pressure. The fusion process creates strong bonds that contribute to our laminates'exceptional durability. ",
        url:"/",
        image1:image1,
        image2:image2,
        image3:image3,
        logo1:logo1,
        logo2:logo2,
    },
]

const CategoryLeftRight = ()=>{
    return(
        <div className="category_left_right">
            <div className="category_left_right_wrapper">
               {categoryLeftRightData.map((item, index)=>(
                <CategoryLeftRightItem key={index} {...item} />
               ))}
            </div>
        </div>
    )
}
export default CategoryLeftRight