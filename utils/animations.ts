// Lightweight "fly to cart" animation (no libs)
export function flyToCart(imgSrc: string, fromEl: HTMLElement, cartSelector = '#cart-fab') {
  const cart = document.querySelector(cartSelector) as HTMLElement | null;
  if (!cart) return;

  const fromRect = fromEl.getBoundingClientRect();
  const toRect = cart.getBoundingClientRect();

  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = 'flying item';
  Object.assign(img.style, {
    position: 'fixed',
    left: `${fromRect.left}px`,
    top: `${fromRect.top}px`,
    width: `${fromRect.width}px`,
    height: `${fromRect.height}px`,
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,.35)',
    zIndex: '9999',
    transition: 'transform .7s cubic-bezier(.2,.8,.2,1), opacity .7s',
  } as CSSStyleDeclaration);
  document.body.appendChild(img);

  // compute translate
  const dx = toRect.left + toRect.width / 2 - (fromRect.left + fromRect.width / 2);
  const dy = toRect.top + toRect.height / 2 - (fromRect.top + fromRect.height / 2);
  requestAnimationFrame(() => {
    img.style.transform = `translate(${dx}px, ${dy}px) scale(.2) rotate(12deg)`;
    img.style.opacity = '0.2';
  });

  img.addEventListener('transitionend', () => {
    img.remove();
    bounce(cart);
  });
}

export function bounce(el: HTMLElement) {
  el.animate(
    [
      { transform: 'translateY(0) scale(1)' },
      { transform: 'translateY(-6px) scale(1.06)' },
      { transform: 'translateY(0) scale(1)' },
    ],
    { duration: 300, easing: 'cubic-bezier(.2,.8,.2,1)' }
  );
}
