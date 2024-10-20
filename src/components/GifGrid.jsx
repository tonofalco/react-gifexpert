import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log(category)
    // console.log({ images, isLoading })



    return (
        <>
            <hr />
            <h3 className="my-5 text-center fw-bold text-secondary">{category}</h3>
            {
                isLoading && (<h2>cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
