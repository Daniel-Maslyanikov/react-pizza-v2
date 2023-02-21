import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://63e1011159bb472a742e4482.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении питсы!');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
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
