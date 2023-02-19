import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63e1011159bb472a742e4482.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении питсы!');
      }
    }

		fetchPizza();
  }, []);

	if(!pizza) {
		return 'Загрузка...'
	}

  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem labore fugiat maiores minus
        beatae. Et accusantium, error maiores beatae, nesciunt aliquid animi repudiandae expedita
        harum deleniti eligendi autem laudantium similique.
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
