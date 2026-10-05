const products = [
  { id: 'headset', name: 'Headset Pulse X', category: 'setup', price: 349.9, installments: '6x de R$ 58,32', rating: '4,9', tag: 'MAIS VENDIDO', image: 'img/headset.webp', alt: 'Headset gamer' },
  { id: 'teclado', name: 'Teclado Mecha RGB', category: 'setup', price: 529, installments: '10x de R$ 52,90', rating: '4,8', tag: 'NOVIDADE', tagClass: 'tag-new', image: 'img/teclado.webp', alt: 'Teclado mecânico gamer' },
  { id: 'controle', name: 'Controle Nova Wireless', category: 'setup', price: 399.9, installments: '8x de R$ 49,99', rating: '4,7', tag: 'DESTAQUE', image: 'img/controle.jpg', alt: 'Controle sem fio para videogame' },
  { id: 'monitor-orbit', name: 'Monitor Orbit 27” 144Hz', category: 'setup', price: 1499, installments: '10x de R$ 149,90', rating: '4,9', tag: 'IMERSÃO TOTAL', image: 'img/monitor.webp', alt: 'Monitor gamer' },
  { id: 'mouse-vector', name: 'Mouse Vector Pro', category: 'setup', price: 249.9, installments: '5x de R$ 49,98', rating: '4,8', tag: 'ULTRALEVE', image: 'img/mouse.webp', alt: 'Mouse gamer' },
  { id: 'microfone-stream', name: 'Microfone StreamCast USB', category: 'setup', price: 459, installments: '9x de R$ 51,00', rating: '4,7', tag: 'PRONTO PARA LIVE', image: 'img/microfone.jpg', alt: 'Microfone para streaming' },
  { id: 'cadeira-drift', name: 'Cadeira Drift Pro', category: 'setup', price: 1299, installments: '10x de R$ 129,90', rating: '4,8', tag: 'CONFORTO PRO', image: 'img/cadeira.jpg', alt: 'Cadeira confortável para longas partidas' },
  { id: 'mousepad-nebula', name: 'Mousepad XL Nebula', category: 'setup', price: 129.9, installments: '3x de R$ 43,30', rating: '4,6', tag: 'EDIÇÃO XL', image: 'img/mousepad.jpg', alt: 'Mousepad gamer' },

  { id: 'hub-usbc', name: 'Hub USB-C 8 em 1', category: 'acessorios', price: 219.9, installments: '4x de R$ 54,98', rating: '4,8', tag: 'MAIS PRÁTICO', image: 'img/hub.webp', alt: 'Hub USB-C com múltiplas conexões' },
  { id: 'webcam-focus', name: 'Webcam Focus Full HD', category: 'acessorios', price: 299.9, installments: '6x de R$ 49,98', rating: '4,7', tag: 'FULL HD', image: 'img/webcam.webp', alt: 'Webcam para chamadas e streaming' },
  { id: 'suporte-notebook', name: 'Suporte Elevate Alumínio', category: 'acessorios', price: 159.9, installments: '3x de R$ 53,30', rating: '4,8', tag: 'ERGONÔMICO', image: 'img/suporte.webp', alt: 'Suporte ajustável para notebook' },
  { id: 'luminaria-pixel', name: 'Luminária Pixel RGB', category: 'acessorios', price: 189.9, installments: '4x de R$ 47,48', rating: '4,6', tag: 'RGB', image: 'img/luminaria.avif', alt: 'Luminária decorativa para o setup' },
  { id: 'carregador-turbo', name: 'Carregador Turbo 65W', category: 'acessorios', price: 149.9, installments: '3x de R$ 49,97', rating: '4,9', tag: 'CARGA RÁPIDA', image: 'img/carregador.jpg', alt: 'Carregador compacto para dispositivos' },
  { id: 'organizador-cabos', name: 'Kit Organiza Cabos', category: 'acessorios', price: 49.9, installments: 'à vista', rating: '4,5', tag: 'SETUP LIMPO', image: 'img/kit organiza cabos.jpg', alt: 'Acessórios para organizar cabos' },
  { id: 'headphone-stand', name: 'Suporte Headset Dock', category: 'acessorios', price: 89.9, installments: '2x de R$ 44,95', rating: '4,6', tag: 'DESIGN CLEAN', image: 'img/suporte headset.webp', alt: 'Suporte de mesa para headset' },
  { id: 'cabo-flex', name: 'Cabo Flex USB-C 2m', category: 'acessorios', price: 39.9, installments: 'à vista', rating: '4,7', tag: 'REFORÇADO', image: 'img/cabo flex.webp', alt: 'Cabo reforçado para carregar dispositivos' },

  { id: 'silver-surfer', name: 'Funko Pop! Surfista Prateado', category: 'colecionaveis', price: 219.9, installments: '4x de R$ 54,98', rating: '5,0', tag: 'MARVEL', tagClass: 'tag-limited', image: 'img/figure guardiao.jpg', alt: 'Funko Pop! do Surfista Prateado, personagem Marvel' },
  { id: 'batman', name: 'Funko Pop! Batman', category: 'colecionaveis', price: 189.9, installments: '4x de R$ 47,48', rating: '4,9', tag: 'DC COMICS', tagClass: 'tag-limited', image: 'img/figure batman.webp', alt: 'Funko Pop! Batman Que Ri' },
  { id: 'superman', name: 'Funko Pop! Superman', category: 'colecionaveis', price: 279.9, installments: '5x de R$ 55,98', rating: '4,8', tag: 'DC COMICS', image: 'img/figure superman.png', alt: 'Funko Pop! Superman em cabine telefônica' },
  { id: 'wonder-woman', name: 'Funko Pop! Mulher-Maravilha', category: 'colecionaveis', price: 239.9, installments: '5x de R$ 47,98', rating: '4,9', tag: 'DC COMICS', image: 'img/figure mulher maravilha.jpg', alt: 'Funko Pop! Mulher-Maravilha' },
  { id: 'wanda', name: 'Funko Pop! Wanda Maximoff e Agatha Harkness', category: 'colecionaveis', price: 329.9, installments: '6x de R$ 54,98', rating: '4,8', tag: 'MARVEL', image: 'img/figure wanda.webp', alt: 'Funko Pop! Wanda' },
  { id: 'iron-man', name: 'Funko Pop! Homem de Ferro', category: 'colecionaveis', price: 199.9, installments: '4x de R$ 49,98', rating: '4,7', tag: 'MARVEL', image: 'img/figure homem de ferro.webp', alt: 'Funko Pop! Homem de Ferro' },
  { id: 'thanos', name: 'Funko Pop! Thanos', category: 'colecionaveis', price: 99.9, installments: '2x de R$ 49,95', rating: '4,9', tag: 'MARVEL', image: 'img/figure thanos.webp', alt: 'Funko Pop! Thanos' },
  { id: 'captain-america', name: 'Funko Pop! Capitão América', category: 'colecionaveis', price: 159.9, installments: '3x de R$ 53,30', rating: '4,8', tag: 'MARVEL', image: 'img/figure capitao america.webp', alt: 'Funko Pop! Capitão América' }
];

const productById = Object.fromEntries(products.map((product) => [product.id, product]));

const cart = new Map();
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const cartPanel = document.querySelector('.cart-panel');
const cartTrigger = document.querySelector('.cart-trigger');
const cartItems = document.querySelector('.cart-items');
const cartEmpty = document.querySelector('.cart-empty');
const cartFooter = document.querySelector('.cart-panel-footer');
const toast = document.querySelector('.toast');
const productGrid = document.querySelector('.product-grid');
let toastTimer;

function renderProducts() {
  const categoryOrder = { colecionaveis: 0, setup: 1, acessorios: 2 };
  const orderedProducts = [...products].sort((first, second) => categoryOrder[first.category] - categoryOrder[second.category]);

  productGrid.innerHTML = orderedProducts.map((product, index) => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-image">
        <span class="product-tag ${product.tagClass ?? ''}">${product.tag}</span>
        <img src="${productImage(product.image)}" alt="${product.alt}" loading="lazy">
        <span class="image-index">${String(index + 1).padStart(2, '0')} / ${products.length}</span>
      </div>
      <div class="product-info">
        <div class="product-heading"><div><p class="product-category">${categoryLabel(product.category)}</p><h3>${product.name}</h3></div><span class="product-rating">★ ${product.rating}</span></div>
        <div class="product-buy-row"><div class="price"><strong>${currency.format(product.price)}</strong><span>${product.installments}</span></div><button class="buy-button" type="button" data-product="${product.id}" aria-label="Comprar ${product.name}"><span>Comprar</span><span aria-hidden="true">+</span></button></div>
      </div>
    </article>`).join('');
}

function productImage(image) {
  return image.startsWith('img/') ? encodeURI(image) : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;
}

function categoryLabel(category) {
  return { setup: 'SETUP GAMER', acessorios: 'ACESSÓRIOS', colecionaveis: 'COLECIONÁVEIS' }[category];
}

function renderCart() {
  const entries = [...cart.entries()];
  const quantity = entries.reduce((total, [, count]) => total + count, 0);
  const total = entries.reduce((sum, [id, count]) => sum + productById[id].price * count, 0);

  document.querySelector('.cart-count').textContent = quantity;
  document.querySelector('.cart-total').textContent = currency.format(total);
  document.querySelector('.panel-total').textContent = currency.format(total);
  cartEmpty.hidden = quantity > 0;
  cartFooter.hidden = quantity === 0;
  cartItems.replaceChildren();

  for (const [id, count] of entries) {
    const product = productById[id];
    const line = document.createElement('article');
    line.className = 'cart-line';
    line.innerHTML = `
      <div><h3>${product.name}</h3><p>${currency.format(product.price)} cada</p></div>
      <div class="cart-line-side">
        <strong>${currency.format(product.price * count)}</strong>
        <div class="quantity-control" aria-label="Quantidade de ${product.name}">
          <button type="button" data-action="decrease" data-product="${id}" aria-label="Diminuir quantidade">−</button>
          <span>${count}</span>
          <button type="button" data-action="increase" data-product="${id}" aria-label="Aumentar quantidade">+</button>
        </div>
        <button class="remove-item" type="button" data-action="remove" data-product="${id}">Remover</button>
      </div>`;
    cartItems.append(line);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.buy-button');
  if (button) {
    const id = button.dataset.product;
    cart.set(id, (cart.get(id) ?? 0) + 1);
    renderCart();
    button.classList.add('is-added');
    window.setTimeout(() => button.classList.remove('is-added'), 500);
    showToast(`${productById[id].name} adicionado ao carrinho`);
  }
});

cartTrigger.addEventListener('click', () => {
  const isOpen = !cartPanel.hidden;
  cartPanel.hidden = isOpen;
  cartTrigger.setAttribute('aria-expanded', String(!isOpen));
});

document.querySelector('.close-cart').addEventListener('click', () => {
  cartPanel.hidden = true;
  cartTrigger.setAttribute('aria-expanded', 'false');
});

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;

  const { action, product } = button.dataset;
  const count = cart.get(product) ?? 0;
  if (action === 'increase') cart.set(product, count + 1);
  if (action === 'decrease' && count > 1) cart.set(product, count - 1);
  if (action === 'decrease' && count <= 1) cart.delete(product);
  if (action === 'remove') cart.delete(product);
  renderCart();
});

const themeToggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
document.body.classList.add('dark-theme');
themeToggle.setAttribute('aria-label', 'Ativar modo claro');
themeColor.content = '#171717';

themeToggle.addEventListener('click', () => {
  setSiteMode(!document.body.classList.contains('dark-theme'));
});

function setSiteMode(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
  themeColor.content = isDark ? '#171717' : '#ffffff';
}

const assistantChat = document.querySelector('.assistant-chat');
const assistantLaunch = document.querySelector('.assistant-launch');
const chatLog = document.querySelector('.chat-log');
const chatForm = document.querySelector('.chat-form');
const chatInput = document.querySelector('.chat-input');
const chatMicrophone = document.querySelector('.chat-microphone');
const chatVoiceOutput = document.querySelector('.chat-voice-output');
let speakChatReplies = false;

function appendChatMessage(text, role) {
  const message = document.createElement('article');
  message.className = `chat-message ${role}-message`;
  message.textContent = text;
  chatLog.append(message);
  chatLog.scrollTop = chatLog.scrollHeight;

  if (role === 'assistant' && speakChatReplies && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
}

function normalizeChatText(text) {
  return text.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function respondToChat(text) {
  const normalized = normalizeChatText(text);
  const themeDark = /modo escuro|tema escuro|fundo escuro|site preto|dark mode/.test(normalized);
  const themeLight = /modo claro|tema claro|fundo branco|site branco|light mode/.test(normalized);
  appendChatMessage(text, 'user');

  if (themeDark || themeLight) {
    setSiteMode(themeDark);
    appendChatMessage(`Pronto! Ativei o modo ${themeDark ? 'escuro' : 'claro'}.`, 'assistant');
    return;
  }

  const colorOptions = [
    { names: ['vermelho', 'vermelha', 'red'], value: '#e30613', label: 'vermelha SENAI' },
    { names: ['azul', 'blue'], value: '#2563eb', label: 'azul' },
    { names: ['verde', 'green'], value: '#15804b', label: 'verde' },
    { names: ['roxo', 'purple'], value: '#7540b5', label: 'roxa' },
    { names: ['rosa', 'pink'], value: '#c83271', label: 'rosa' },
    { names: ['laranja', 'orange'], value: '#c74d1b', label: 'laranja' }
  ];
  const selectedColor = colorOptions.find((option) => option.names.some((name) => normalized.includes(name)));

  if (selectedColor && /cor|color|tema|mude|mudar|troque|trocar|altere|alterar|site|padrao|original/.test(normalized)) {
    document.body.style.setProperty('--accent', selectedColor.value);
    document.body.style.setProperty('--orange', selectedColor.value);
    appendChatMessage(`Cor de destaque alterada para ${selectedColor.label}. Peça outra cor ou diga “vermelho padrão” para voltar à identidade GeekZone.`, 'assistant');
    return;
  }

  const category = normalized.includes('colecion') || normalized.includes('funko') ? 'colecionaveis'
    : normalized.includes('acessor') ? 'acessorios'
      : normalized.includes('setup') || normalized.includes('gamer') ? 'setup' : null;

  if (category) {
    const matchingProducts = products.filter((product) => product.category === category).slice(0, 4);
    const productList = matchingProducts.map((product) => `${product.name} — ${currency.format(product.price)}`).join('\n');
    appendChatMessage(`Aqui estão algumas opções de ${categoryLabel(category).toLocaleLowerCase('pt-BR')}:\n${productList}\nVeja todos usando o filtro da vitrine.`, 'assistant');
    return;
  }

  appendChatMessage('Posso ajudar com colecionáveis, setup gamer e acessórios. Também posso trocar o modo de tela ou a cor de destaque. Experimente “modo claro”, “modo escuro” ou “mudar cor para azul”.', 'assistant');
}

assistantLaunch.addEventListener('click', () => {
  assistantChat.hidden = false;
  assistantLaunch.setAttribute('aria-expanded', 'true');
  chatInput.focus();
});

document.querySelector('.chat-close').addEventListener('click', () => {
  assistantChat.hidden = true;
  assistantLaunch.setAttribute('aria-expanded', 'false');
  assistantLaunch.focus();
});

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;
  chatInput.value = '';
  respondToChat(message);
});

document.querySelectorAll('[data-chat-prompt]').forEach((button) => {
  button.addEventListener('click', () => respondToChat(button.dataset.chatPrompt));
});

chatVoiceOutput.addEventListener('click', () => {
  speakChatReplies = !speakChatReplies;
  chatVoiceOutput.setAttribute('aria-pressed', String(speakChatReplies));
  chatVoiceOutput.setAttribute('aria-label', speakChatReplies ? 'Desativar respostas em voz alta' : 'Ativar respostas em voz alta');
  chatVoiceOutput.title = speakChatReplies ? 'Desativar respostas em voz alta' : 'Ativar respostas em voz alta';
  if (!speakChatReplies && 'speechSynthesis' in window) window.speechSynthesis.cancel();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.addEventListener('start', () => chatMicrophone.classList.add('is-listening'));
  recognition.addEventListener('end', () => chatMicrophone.classList.remove('is-listening'));
  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript.trim();
    if (transcript) respondToChat(transcript);
  });
  recognition.addEventListener('error', () => appendChatMessage('Não consegui acessar o microfone. Confira a permissão do navegador ou digite sua mensagem.', 'assistant'));
  chatMicrophone.addEventListener('click', () => {
    try {
      recognition.start();
    } catch {
      appendChatMessage('O microfone já está ativo. Fale seu comando ou aguarde a gravação terminar.', 'assistant');
    }
  });
} else {
  chatMicrophone.addEventListener('click', () => appendChatMessage('Este navegador não oferece reconhecimento de voz. Você ainda pode enviar mensagens digitando.', 'assistant'));
}

function setCategory(category) {
  document.querySelectorAll('.product-card').forEach((card) => card.classList.toggle('is-hidden', category !== 'todos' && card.dataset.category !== category));
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.category === category);
  });
  document.querySelectorAll('.main-nav [data-filter]').forEach((link) => {
    link.classList.toggle('is-selected', link.dataset.filter === category);
  });
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => setCategory(button.dataset.category));
});

document.querySelectorAll('.main-nav [data-filter]').forEach((link) => {
  link.addEventListener('click', () => setCategory(link.dataset.filter));
});

const checkoutDialog = document.querySelector('.checkout-dialog');
const checkoutForm = document.querySelector('.checkout-form');
const checkoutSuccess = document.querySelector('.checkout-success');
const checkoutShipping = 19.9;

function updateCheckoutSummary() {
  const subtotal = [...cart.entries()].reduce((sum, [id, count]) => sum + productById[id].price * count, 0);
  document.querySelector('.checkout-subtotal').textContent = currency.format(subtotal);
  document.querySelector('.checkout-total').textContent = currency.format(subtotal + checkoutShipping);
}

document.querySelector('.checkout-button').addEventListener('click', () => {
  cartPanel.hidden = true;
  cartTrigger.setAttribute('aria-expanded', 'false');
  checkoutForm.hidden = false;
  checkoutSuccess.hidden = true;
  checkoutForm.reset();
  updateCheckoutSummary();
  checkoutDialog.showModal();
});

document.querySelector('.checkout-close').addEventListener('click', () => checkoutDialog.close());
document.querySelector('.checkout-finish').addEventListener('click', () => checkoutDialog.close());

checkoutDialog.addEventListener('click', (event) => {
  if (event.target === checkoutDialog) checkoutDialog.close();
});

const cepInput = document.querySelector('#checkout-cep');
const cepStatus = document.querySelector('.cep-status');

cepInput.addEventListener('input', () => {
  const digits = cepInput.value.replace(/\D/g, '').slice(0, 8);
  cepInput.value = digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
});

async function lookupCep() {
  const digits = cepInput.value.replace(/\D/g, '');
  if (digits.length !== 8) {
    cepStatus.textContent = 'Digite os 8 números do CEP.';
    cepStatus.className = 'cep-status is-error';
    return;
  }

  cepStatus.textContent = 'Buscando endereço...';
  cepStatus.className = 'cep-status';

  try {
    const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
    if (!response.ok) throw new Error('CEP indisponível');
    const address = await response.json();
    if (address.erro) throw new Error('CEP não encontrado');

    document.querySelector('#checkout-street').value = address.logradouro ?? '';
    document.querySelector('#checkout-neighborhood').value = address.bairro ?? '';
    document.querySelector('#checkout-city').value = address.localidade ?? '';
    document.querySelector('#checkout-state').value = address.uf ?? '';
    cepStatus.textContent = 'Endereço encontrado. Complete o número para continuar.';
    cepStatus.className = 'cep-status is-success';
  } catch {
    cepStatus.textContent = 'Não foi possível consultar. Preencha o endereço manualmente.';
    cepStatus.className = 'cep-status is-error';
  }
}

document.querySelector('.cep-search').addEventListener('click', lookupCep);
cepInput.addEventListener('blur', () => {
  if (cepInput.value.replace(/\D/g, '').length === 8) lookupCep();
});

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!checkoutForm.reportValidity()) return;

  const formData = new FormData(checkoutForm);
  const name = formData.get('name').trim();
  const payment = formData.get('payment');
  const subtotal = [...cart.entries()].reduce((sum, [id, count]) => sum + productById[id].price * count, 0);
  const orderId = `GZ-${Date.now().toString().slice(-6)}`;

  document.querySelector('.success-title').textContent = `Tudo certo, ${name.split(' ')[0]}!`;
  document.querySelector('.success-message').textContent = 'Seu pedido foi registrado nesta demonstração. A confirmação e os próximos passos seriam enviados por e-mail.';
  document.querySelector('.success-order-id').textContent = orderId;
  document.querySelector('.success-payment').textContent = payment;
  document.querySelector('.success-total').textContent = currency.format(subtotal + checkoutShipping);

  checkoutForm.hidden = true;
  checkoutSuccess.hidden = false;
  checkoutDialog.scrollTop = 0;
  cart.clear();
  renderCart();
});

document.addEventListener('click', (event) => {
  if (!cartPanel.hidden && !cartPanel.contains(event.target) && !cartTrigger.contains(event.target)) {
    cartPanel.hidden = true;
    cartTrigger.setAttribute('aria-expanded', 'false');
  }
});

renderProducts();
renderCart();