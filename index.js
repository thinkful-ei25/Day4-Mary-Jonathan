function generateResultHtml(addItemResult) {
  
    return `

    <li>
        <span class="shopping-item">${addItemResult}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `;
  }



function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        const item = $('.js-shopping-list-entry').val();
        $('.js-shopping-list-entry').val('');
        console.log(item);

        $('.shopping-list').append(generateResultHtml(item));
    })
    
}

name of the class and add a new class to the class list
remove the css class

look for this.closest li.remove 

$(handleSubmit);
//.html(results.map(generateResultHtml)