import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

function App() {
  return (
    /* Container para o formulário como fundo semi transparente*/

    <div className="flex min-h-screen w-full h-full items-center justify-center gap-3">
      <div className="flex flex-col bg-red-600 w-5/6 justify-center items-center ">
        <p>
          Receba sua Proof-Of-Attendance NFT
        </p>
        <p>
          Para receber sua NFT você precisa ter participado
          do evento e ter uma carteira na rede Sepolia

        </p>

        <form className="flex flex-col mt-8">
          <Input description="Esse nome será gravado no NFT para provar sua presença" 
          label="Seu Nome" 
          placeholder="Digite seu nome" 
          type="text"/>

          <Input description="Email para receber novidades" 
          label="Email" 
          placeholder="blockchain@inteli.com.br" 
          type="text"/>

          <Input description="Carteira para receber NFT" 
          label="Wallet" 
          placeholder="00.000...0000" 
          type="text"
        />
        <Button type="submit" name="Gerar NFT"/>
        <Button type="submit" name="maselo"/>
        <Checkbox veiculo1="Carro" veiculo2="Moto" veiculo3="Bicicleta"></Checkbox>
        </form>
      </div>
    </div>
  );
}

export default App;
