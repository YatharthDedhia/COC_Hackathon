import './css/meals.css'

const Breakfast = () => {
    return (
    <div className="meals-body">
         <div className="contact_form">
        <div className="formulario rizz">
            <h1>Breakfast</h1>
            <form action="submeter-formulario.php" method="post">
                <p>
                    <label for="nome" className="colocar_nome">Entry 1      
                    </label>
                    <input type="text" name="introduzir_nome" id="nome" required="obrigatorio" placeholder="food item"/>
                </p>
                <p>
                    <label for="email" className="colocar_email">Entry 2                      
                    </label>
                    <input type="email" name="introduzir_email" id="email" required="obrigatorio"
                        placeholder="food item"/>
                </p>
                <p>
                    <label for="telefone" className="colocar_telefone">Entry 3
                    </label>
                    <input type="tel" name="introduzir_telefone" id="telefone" placeholder="food item"/>
                </p>
                <p>
                    <label for="website" className="colocar_website">Entry 4
                    </label>
                    <input type="url" name="introduzir_website" id="website" placeholder="food item"/>
                </p>
                <p>
                    <label for="assunto" className="colocar_asunto">Entry 5                    
                    </label>
                    <input type="text" name="introduzir_assunto" id="assunto" required="obrigatorio"
                        placeholder="food item"/>
                </p>
                <p>
                    <label for="mensagem" className="colocar_mensagem">Special Item
                    </label>
                    <textarea name="introduzir_mensagem" className="texto_mensagem" id="mensagem" required="obrigatorio"
                        placeholder="Any Specials Today ?"></textarea>
                </p>
                <button type="submit" name="enviar_formulario" id="enviar">
                    <p>Upload</p>
                </button>
            </form>
        </div>
    </div>
    </div>
    );
};

export default Breakfast;