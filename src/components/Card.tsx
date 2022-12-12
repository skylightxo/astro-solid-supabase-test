type Item = {
    name: string
    description: string
    price: number
};

export const Card = ({ item }: { item: Item }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div class="card-actions justify-end">
                    <label class="badge badge-lg">{item.price}$</label>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}