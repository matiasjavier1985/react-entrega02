export default function itemDetail({infoDetalle}) {
    const {brand,model,price,img}= infoDetalle
    return (
        <div>
          <h1>{brand}</h1>
          <h2>{model}</h2>
          <h2>{price}</h2>
          <img src={img} alt="BICIS"/>
        </div>
    )

}