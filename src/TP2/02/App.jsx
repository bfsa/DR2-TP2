import React from 'react';

const Ex02 = () => {
  return (
    <div className='component'>

        <div className='containerImagens'>
            <img src="https://www.svicente.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw5fba8486/Produtos/249718-7894900014211-refrigerante%20coca%20cola%20pet%20retornavel%202l-coca%20cola-1.png" alt="Coca Cola 1" />
            <img src="https://boa.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fboa.vtexassets.com%2Farquivos%2Fids%2F558075%2FRefrigerante-Sem-Acucar-Coca-Cola-Garrafa-200Ml.jpg%3Fv%3D638495683823430000" alt="Coca Cola 2" />
            <img src="https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/78909045/img_500_1.png" alt="Coca Cola 3" />
        </div>

        <div className='containerMain'>
            <div className='descricao'>
                <h1>Coca-Cola</h1>
                <p>Coca-Cola é uma das bebidas mais famosas do mundo, apreciada por milhões de pessoas em diferentes países. 
                Com seu sabor inconfundível e refrescante, ela é perfeita para ser apreciada em qualquer ocasião.</p>
            </div>
            <div className='imagemGrande'>
                <img src="https://espacoprime.fbitsstatic.net/img/p/pack-6un-coca-cola-garrafa-de-vidro-250ml-72965/258942-1.jpg?w=480&h=480&v=no-change&qs=ignore" alt="Coca Cola Grande" />
            </div>
        </div>

    </div>
  );
};
export default Ex02;
