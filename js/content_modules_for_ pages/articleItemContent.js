class DynamicHTMLGenerator {
    constructor(data) {
      this.data = data;
    }
  
    generateHTML() {
      if (!this.data || this.data.length < 12) {
        console.error('Data is not complete');
        return;
      }
  
      const aricleItemContainer = document.getElementById('aricleItem');
      const mainContainer = document.createElement('div');
      mainContainer.classList.add('flex-column', 'gap-24');
  
      // Create and append the date paragraph
      const dateParagraph = document.createElement('p');
      dateParagraph.classList.add('text-color-gray');
      dateParagraph.textContent = this.data[0];
      mainContainer.appendChild(dateParagraph);
  
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('flex-column', 'gap-32');
  
      const outerFlexColumn = document.createElement('div');
      outerFlexColumn.classList.add('flex-column', 'gap-48');
      const innerFlexColumn = document.createElement('div');
      innerFlexColumn.classList.add('flex-column', 'gap-24');
  
      // Create and append the h3 element
      const h3 = document.createElement('h3');
      h3.textContent = this.data[1];
      innerFlexColumn.appendChild(h3);
  
      // Create and append the first text paragraph
      const p1 = document.createElement('div');
      p1.classList.add('flex-column', 'gap-8');
      const h5p1 = document.createElement('h5');
      h5p1.textContent = this.data[2]
      const p1Text = document.createElement('p');
      p1Text.textContent = this.data[3];
      p1.appendChild(h5p1);
      p1.appendChild(p1Text);
      innerFlexColumn.appendChild(p1);
  
      // Append inner flex column to outer flex column
      
      outerFlexColumn.appendChild(innerFlexColumn);
  
      // Create and append the image
      const img = document.createElement('img');
      img.src = this.data[4];
      img.alt = 'image';
      img.style.width = '100%';
      img.style.height = 'auto';
      outerFlexColumn.appendChild(img);
  
      contentContainer.appendChild(outerFlexColumn);
  
      const gap32Container = document.createElement('div');
      gap32Container.classList.add('flex-column', 'gap-32');
  
      // Create and append the second h2 element
      const h2 = document.createElement('h2');
      h2.classList.add('m-0');
      h2.textContent = this.data[5];
      gap32Container.appendChild(h2);
  
      const pContainer = document.createElement('div');
      pContainer.classList.add('flex-column', 'gap-8');
      // Create and append the second text paragraph
      const p2 = document.createElement('p');
      p2.textContent = this.data[6];
      pContainer.appendChild(p2)
      gap32Container.appendChild(pContainer);

      const p3 = document.createElement('p');
      p3.textContent = this.data[7];
      pContainer.appendChild(p3);
      gap32Container.appendChild(pContainer);
  
   
      const listDiv = document.createElement('div');
      listDiv.classList.add('flex-column', 'gap-24');
  
      const listTitleH5 = document.createElement('h5');
      listTitleH5.textContent = this.data[8]
      listDiv.appendChild(listTitleH5)
      // Create and append the list
      const ul = document.createElement('ul');
      const listItems = this.data.slice(9);
      listItems.forEach((itemText) => {
        const li = document.createElement('li');
        li.classList.add('flex-baseline-s-b', 'gap-12');
        const icon = document.createElement('i');
        icon.classList.add('bx', 'bx-wifi-0', 'icon-font-size-m');
        const listItemText = document.createElement('p');
        listItemText.textContent = itemText;
        li.appendChild(icon);
        li.appendChild(listItemText);
        ul.appendChild(li);
      });

      listDiv.appendChild(ul)
      gap32Container.appendChild(listDiv);
  
      // Append gap32Container to contentContainer
      contentContainer.appendChild(gap32Container);
  
      // Create and append the final text paragraph
      const finalP = document.createElement('p');
      finalP.textContent = this.data[13];
      contentContainer.appendChild(finalP);
  
      // Append the contentContainer to the main container
      mainContainer.appendChild(contentContainer);
  
      // Append the mainContainer to the articleItemContainer
      aricleItemContainer.appendChild(mainContainer);
    }
  }
const dataFromBackend = [
  "25 Липня 2023",
  "Електронна система охорони здоров’я є найбільшою ІТ-системою країни. Вона стрімко розвивається, дозволяє позбутися паперових медичних карток та легко зберігати й аналізувати всю необхідну медичну інформацію. Цього тижня кількість внесених електронних медичних записів в ЕСОЗ для близько 35 млн пацієнтів сягнула 2 мільярдів!",
  "Усі електронні медичні записи, які вносять про пацієнта медичні працівники, зберігаються у його електронній медичній картці.",
  "Відтак, медична інформація щодо діагнозів хронічних, інфекційних та неінфекційних хвороб пацієнта, проведених консультацій, щеплень, обстежень, перенесених операцій та госпіталізацій, проведеної діагностики тощо зберігається в єдиному захищеному місці.",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  "Електронна система охорони здоров’я",
  "Завдяки цифровізації медичні записи, внесені до ЕСОЗ, до прикладу про вакцинацію, неможливо втратити чи загубити, натомість їх можна в будь-який момент відновити, звернувшись до сімейного лікаря.",
  "За потреби та дозволу пацієнта лікар завжди може отримати дані, необхідні для призначення ефективного лікування. До того ж завдяки електронній медичній картці забезпечується багаторівневий захист медичної інформації про пацієнта, яку неможливо повноцінно забезпечити для паперових медичних карток.",
  "Завдяки цифровізації медичні запис",
  "Сьогодні увесь обʼєм електронних медичних записів включає зокрема 62,7 млн е-рецептів, 1,8 млн планів лікування, 19,7 млн медичних висновків про тимчасову непрацездатність та інше.",
  "Найбільше електронних медичних записів створили у місті Києві – 203,1 млн,Дніпропетровській – 195,3 млн і Харківській областях – 154,3 млн",
  "До електронних медичних записів відносяться також і електронні направлення. На сьогодні створено понад 342 млн направлень, з яких 42,2 млн сформовано у м. Києві.",
  "Відкрита статистика ведення електронних медичних записів дозволяє власникам та керівникам закладів охорони здоров’я бачити реальну картину щодо попиту на відповідні медичні послуги та послуги окремих лікарів.",
  "У майбутньому функціонал ЕСОЗ буде доповнюватися новими цифровими інструментами, що безумовно покращить якість послуг і доступ до важливої медичної інформації.",
];

// console.log(dataFromBackend.length)
// Instantiate the class and generate the HTML
const generator = new DynamicHTMLGenerator(dataFromBackend);
generator.generateHTML(); // This will insert the content into the 'aricleItem' container
