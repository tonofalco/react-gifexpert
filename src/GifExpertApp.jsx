import { useState, useRef } from "react";
import { AddCategory, GifGrid, ListShow } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['DBZ']);
    const categoryRefs = useRef({}); // Esto mantendrá una referencia a cada GifGrid.

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    const scrollToCategory = (category) => {
        if (categoryRefs.current[category]) {
            categoryRefs.current[category].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className="fw-bold text-center my-5 text-primary">Escribe una palabra</h1>
                <AddCategory
                    onNewCategory={onAddCategory} />

                <div className="col-12 sticky-top">
                    <ListShow
                        categories={categories}
                        onCategoryClick={scrollToCategory} />

                </div>
                <div className="col-12">
                    {categories.map(category => (
                        <div ref={el => categoryRefs.current[category] = el} key={category}>
                            <GifGrid category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
