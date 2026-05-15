/* FES DMS — shared interactions */
(function () {
  // Sidebar collapse
  const app = document.querySelector('.app');
  const collapseBtn = document.querySelector('[data-collapse]');
  if (collapseBtn && app) {
    const saved = localStorage.getItem('fes-sb-collapsed') === '1';
    if (saved) app.classList.add('collapsed');
    collapseBtn.addEventListener('click', () => {
      app.classList.toggle('collapsed');
      localStorage.setItem('fes-sb-collapsed', app.classList.contains('collapsed') ? '1' : '0');
    });
  }

  // Drawer open/close
  document.querySelectorAll('[data-open-drawer]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.openDrawer;
      const drawer = document.getElementById(id);
      const overlay = document.querySelector(`.drawer-overlay[data-for="${id}"]`);
      drawer?.classList.add('open');
      overlay?.classList.add('open');
    });
  });
  document.querySelectorAll('[data-close-drawer]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.drawer')?.classList.remove('open');
      document.querySelectorAll('.drawer-overlay').forEach(o => o.classList.remove('open'));
    });
  });
  document.querySelectorAll('.drawer-overlay').forEach(o =>
    o.addEventListener('click', () => {
      document.querySelectorAll('.drawer, .drawer-overlay').forEach(el => el.classList.remove('open'));
    })
  );

  // Modal open/close
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.openModal)?.classList.add('open');
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn =>
    btn.addEventListener('click', () => btn.closest('.modal-overlay')?.classList.remove('open'))
  );

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(group => {
    group.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  });

  // OTP auto-advance
  document.querySelectorAll('.otp-row').forEach(row => {
    const inputs = row.querySelectorAll('.otp-input');
    inputs.forEach((inp, i) => {
      inp.addEventListener('input', () => {
        if (inp.value) inp.classList.add('filled'); else inp.classList.remove('filled');
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      });
      inp.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !inp.value && inputs[i - 1]) inputs[i - 1].focus();
      });
    });
  });

  // Checkbox toggle (visual)
  document.querySelectorAll('.check-box, .radio-box').forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('radio-box')) {
        const group = el.dataset.group;
        if (group) document.querySelectorAll(`.radio-box[data-group="${group}"]`).forEach(r => r.classList.remove('checked'));
      }
      el.classList.toggle('checked');
    });
  });

  // Chip toggle
  document.querySelectorAll('.chip[data-toggle]').forEach(chip => {
    chip.addEventListener('click', () => chip.classList.toggle('active'));
  });
})();
