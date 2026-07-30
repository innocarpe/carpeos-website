/* CarpeOS website interactions — dependency-free progressive enhancement. */
(function () {
  'use strict';

  var root = document.documentElement;

  function selectAll(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function initHeader() {
    var header = document.querySelector('[data-header]');
    if (!header) return;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 18);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initNavigation() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var links = document.querySelector('[data-nav-links]');
    if (!toggle || !links) return;

    var firstLink = links.querySelector('a');

    function setOpen(open, returnFocus) {
      links.setAttribute('data-open', String(open));
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');

      if (open && firstLink) {
        window.requestAnimationFrame(function () {
          firstLink.focus();
        });
      } else if (returnFocus) {
        toggle.focus();
      }
    }

    function handleToggle() {
      setOpen(links.getAttribute('data-open') !== 'true', false);
    }

    function handleLink() {
      setOpen(false, false);
    }

    function handleKeydown(event) {
      if (event.key === 'Escape' && links.getAttribute('data-open') === 'true') {
        setOpen(false, true);
      }
    }

    function handleResize() {
      if (window.innerWidth > 820 && links.getAttribute('data-open') === 'true') {
        setOpen(false, false);
      }
    }

    try {
      toggle.addEventListener('click', handleToggle);
      selectAll('a', links).forEach(function (link) {
        link.addEventListener('click', handleLink);
      });
      document.addEventListener('keydown', handleKeydown);
      window.addEventListener('resize', handleResize, { passive: true });

      setOpen(false, false);
      root.classList.add('nav-enhanced');
    } catch (error) {
      root.classList.remove('nav-enhanced');
      links.removeAttribute('data-open');
      console.warn('CarpeOS navigation enhancement unavailable; links left expanded.', error);
    }
  }

  function showEveryReveal() {
    root.classList.remove('reveal-ready');
    selectAll('.reveal').forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  function initReveal() {
    var elements = selectAll('.reveal');
    if (!elements.length) return;

    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      showEveryReveal();
      return;
    }

    try {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -34px 0px'
      });

      root.classList.add('reveal-ready');
      elements.forEach(function (element) {
        observer.observe(element);
      });

      window.setTimeout(function () {
        selectAll('.reveal:not(.is-visible)').forEach(function (element) {
          var rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.05) element.classList.add('is-visible');
        });
      }, 900);
    } catch (error) {
      console.warn('CarpeOS reveal animation unavailable; content shown without motion.', error);
      showEveryReveal();
    }
  }

  function legacyCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      if (typeof document.execCommand !== 'function') {
        return { copied: false, error: new Error('Legacy copy command is unavailable.') };
      }
      return { copied: document.execCommand('copy'), error: null };
    } catch (error) {
      return { copied: false, error: error };
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function initCopyButtons() {
    selectAll('[data-copy-target]').forEach(function (button) {
      var originalLabel = button.textContent;
      var resetTimer = null;
      var copying = false;

      function finish(copied, error, restoreFocus) {
        copying = false;
        button.disabled = false;
        button.textContent = copied ? 'Copied' : 'Select and copy';

        if (restoreFocus) {
          button.focus({ preventScroll: true });
        }

        if (error) {
          console.warn('CarpeOS could not copy the install commands automatically.', error);
        }

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.textContent = originalLabel;
        }, 1600);
      }

      button.addEventListener('click', function () {
        var restoreFocus = document.activeElement === button;
        if (copying) return;

        var targetId = button.getAttribute('data-copy-target');
        var target = document.getElementById(targetId);
        if (!target) {
          finish(false, new Error('Copy target not found: ' + targetId), restoreFocus);
          return;
        }

        var text = target.innerText.trim();
        copying = true;
        button.disabled = true;
        window.clearTimeout(resetTimer);

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(function () {
            finish(true, null, restoreFocus);
          }).catch(function (clipboardError) {
            var fallback = legacyCopy(text);
            if (fallback.copied) {
              console.warn('Clipboard API failed; the legacy copy path succeeded.', clipboardError);
              finish(true, null, restoreFocus);
            } else {
              finish(false, fallback.error || clipboardError, restoreFocus);
            }
          });
        } else {
          var fallback = legacyCopy(text);
          var fallbackError = fallback.error;
          if (!fallback.copied && !fallbackError) {
            fallbackError = new Error('Legacy copy command returned false.');
          }
          finish(fallback.copied, fallbackError, restoreFocus);
        }
      });
    });
  }

  function initYear() {
    selectAll('[data-year]').forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function init() {
    initHeader();
    initNavigation();
    initReveal();
    initCopyButtons();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
