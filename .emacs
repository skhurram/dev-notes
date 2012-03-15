;; some files from here: https://github.com/briancarper/dotfiles


(mapcar (lambda (x) (add-to-list 'load-path (expand-file-name x)))
        '("~/.emacs.d"
          "~/.emacs.d/clojure-mode"
          "~/.emacs.d/slime"
          "~/.emacs.d/swank-clojure-extra"
          "~/.emacs.d/haskell-mode"))

(defun require-all (packages)
    (mapcar #'require packages))

(require-all '(
               mwe-log-commands
               uniquify
               light-symbol
               linum 
               color-theme
               gentooish
               ido
               parenface
               point-undo
               bar-cursor
               browse-kill-ring
               smart-tab
               clojure-test-mode
               undo-tree
               ))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; GLOBAL
(color-theme-initialize)

(if (string= window-system "w32")
    (set-default-font "-outline-Consolas-normal-r-normal-normal-14-97-96-96-c-*-iso859-1")
    (set-default-font "Consolas-12" t))

(if window-system
    (color-theme-gentooish)
    (color-theme-dark-laptop))

;; from http://joost.zeekat.nl/2010/06/03/slime-hints-3-interactive-completions-and-smart-tabs/

(setq hippie-expand-try-functions-list
      (append hippie-expand-try-functions-list '(slime-complete-symbol)))
(setq smart-tab-completion-functions-alist
      '((emacs-lisp-mode . lisp-complete-symbol)
        (text-mode . dabbrev-completion)
        (slime-repl-mode . slime-complete-symbol)))

(global-undo-tree-mode 1)
(global-smart-tab-mode 1)
;;(global-set-key "\C-R" 'undo-tree-redo)
(add-hook 'undo-mode-visualizer-mode
          (define-key undo-tree-visualizer-map
            (kbd "<return>")
            'undo-tree-visualizer-quit))


(browse-kill-ring-default-keybindings)
(setq auto-save-list-file-prefix nil)
(fset 'yes-or-no-p 'y-or-n-p)


(defun my-backward-kill-word ()
  "Kill words backward my way."
  (interactive)
  (if (bolp)
      (backward-delete-char 1)
    (if (string-match "^\\s-+$" (buffer-substring (point-at-bol) (point)))
        (kill-region (point-at-bol) (point))
      (backward-kill-word 1))))

(global-set-key "\M-\d" 'my-backward-kill-word)

;; From http://stackoverflow.com/questions/848936/how-to-preserve-clipboard-content-in-emacs-on-windows
(defadvice kill-new (before kill-new-push-xselection-on-kill-ring activate)
  "Before putting new kill onto the kill-ring, add the clipboard/external selection to the kill ring"
  (let ((have-paste (and interprogram-paste-function
                         (funcall interprogram-paste-function))))
    (when have-paste (push have-paste kill-ring))))


(global-hi-lock-mode 1)
(global-set-key "\C-o" 'point-undo)
;;(global-set-key "\C-i" 'point-redo)

;; from http://stackoverflow.com/questions/589691/how-can-i-emulate-vims-search-in-gnu-emacs

(defun my-isearch-word-at-point ()
  (interactive)
  (call-interactively 'isearch-forward-regexp))

(defun my-isearch-yank-word-hook ()
  (when (equal this-command 'my-isearch-word-at-point)
    (let ((string (concat "\\<"
                          (buffer-substring-no-properties
                           (progn (skip-syntax-backward "w_") (point))
                           (progn (skip-syntax-forward "w_") (point)))
                          "\\>")))
      (if (and isearch-case-fold-search
               (eq 'not-yanks search-upper-case))
          (setq string (downcase string)))
      (setq isearch-string string
            isearch-message
            (concat isearch-message
                    (mapconcat 'isearch-text-char-description
                               string ""))
            isearch-yank-flag t)
      (isearch-search-and-update))))

(add-hook 'isearch-mode-hook 'my-isearch-yank-word-hook)
(global-set-key [M-kp-multiply] 'my-isearch-word-at-point)


(bar-cursor-mode 1)

;; Try to fix copy/paste
(setq-default mode-line-buffer-identification '(#("%2b" 0 2 (face mode-line-buffer-id))))
(setq transient-mark-mode t)
(setq mouse-drag-copy-region nil)
(setq x-select-enable-primary nil)
(setq x-select-enable-clipboard t)
(setq select-active-regions t)
(global-set-key [mouse-2] 'mouse-yank-primary)
(cua-mode nil)

(delete-selection-mode t)
(tool-bar-mode 0)
;;(global-linum-mode)
;;(setq linum-format "%3d ")
(setq-default indent-tabs-mode nil)
(setq indent-tabs-mode nil)
(winner-mode t)

(tooltip-mode nil)
(setq line-number-mode nil)
(setq column-number-mode nil)
(setq size-indication-mode nil)
(setq mode-line-position nil)
(ido-mode 1)

(global-set-key "\C-m" 'reindent-then-newline-and-indent)  ;No tabs
(global-set-key "\C-a" 'beginning-of-line-text)

(setq window-min-height 2)
(defun maximize-window ()
  (interactive)
  (let* ((other-windows (cdr (window-list)))
         (other-heights (* (length other-windows) window-min-height))
         (my-height (- (frame-height) other-heights)))
    (setf (window-height) (- my-height 1))))

(add-hook 'term-setup-hook (lambda () (windmove-default-keybindings 'meta)))
;(defadvice windmove-up (after maximize activate) (maximize-window))
;(defadvice windmove-down (after maximize activate) (maximize-window))


(set-fringe-style (cons 0 1))

(setq vc-handled-backends nil)

(defun kill-all-buffers ()
  (interactive)
  (when (y-or-n-p "Kill all buffers?")
    (dolist (buf (buffer-list))
      (kill-buffer buf))
    (delete-other-windows)))
(global-set-key "\C-xK" 'kill-all-buffers)

(defun make-backup-file-name (file)
  (concat "~/.backups/" (file-name-nondirectory file) "~"))

(global-set-key [C-tab] 'indent-according-to-mode)

;; Auto-wrap isearch
;;(defadvice isearch-search (after isearch-no-fail activate)
;;  (unless isearch-success
;;    (ad-disable-advice 'isearch-search 'after 'isearch-no-fail)
;;    (ad-activate 'isearch-search)
;;    (isearch-repeat (if isearch-forward 'forward))
;;    (ad-enable-advice 'isearch-search 'after 'isearch-no-fail)
;;    (ad-activate 'isearch-repeat)))

(setq isearch-search-fun-function 'wrapping-search-fun)

(defun wrapping-search-fun ()
  (lambda (&rest args)
    (let* ((isearch-search-fun-function nil)
           (fun (isearch-search-fun)))
      (or (apply fun args)
          (unless (cadr args)
            (goto-char (if isearch-forward (point-min) (point-max)))
            (apply fun args))))))

;; Prevent Emacs from stupidly auto-changing my working directory
(defun find-file-save-default-directory ()
    (interactive)
    (setq saved-default-directory default-directory)
    (ido-find-file)
    (setq default-directory saved-default-directory))
(global-set-key "\C-x\C-f" 'find-file-save-default-directory)

(defun replace-globally ()
  "Run replace-regexp across the whole file, rather than from
point to the end of the file."
  (interactive)
  (let ((before (point)))
    (goto-char (point-min))
    (call-interactively 'replace-regexp)
    (when (= (point) (point-min))
      (goto-char before))))

(require 'saveplace)
(setq save-place-file "~/.emacs.d/saveplace")
(setq save-place t)

;; adapted from http://www.emacswiki.org/emacs/.emacs-ChristianRovner.el
(defun expand-region-linewise ()
  (interactive)
  (let ((start (region-beginning))
        (end (region-end)))
   (goto-char start)
   (beginning-of-line)
   (set-mark (point))
   (goto-char end)
   (unless (bolp) (end-of-line))))

(defun markdown-copy ()
  (interactive)
  (save-excursion
    (expand-region-linewise)
    (indent-rigidly (region-beginning) (region-end) 4)
    (clipboard-kill-ring-save (region-beginning) (region-end))
    (indent-rigidly (region-beginning) (region-end) -4)))

(defun yank-with-newline ()
  "Yank, appending a newline if the yanked text doesn't end with one."
  (yank)
  (when (not (string-match "\n$" (current-kill 0)))
    (newline-and-indent)))

(defun yank-as-line-above ()
  "Yank text as a new line above the current line.

Also moves point to the beginning of the text you just yanked."
  (interactive)
  (let ((lnum (line-number-at-pos (point))))
    (beginning-of-line)
    (yank-with-newline)
    (goto-line lnum)))

(defun yank-as-line-below ()
  "Yank text as a new line below the current line.

Also moves point to the beginning of the text you just yanked."
  (interactive)
  (let* ((lnum (line-number-at-pos (point)))
         (lnum (if (eobp) lnum (1+ lnum))))
    (if (and (eobp) (not (bolp)))
        (newline-and-indent)
      (forward-line 1))
    (yank-with-newline)
    (goto-line lnum)))

(global-set-key "\M-P" 'yank-as-line-above)
(global-set-key "\M-p" 'yank-as-line-below)

;; from http://stackoverflow.com/questions/2173324/emacs-equivalents-of-vims-dd-o-o
(defun open-line-above ()
  (interactive)
  (unless (bolp)
    (beginning-of-line))
  (newline-and-indent)
  (forward-line -1)
  (indent-according-to-mode))

(defun open-line-below ()
  (interactive)
  (unless (eolp)
    (end-of-line))
  (newline-and-indent))

(global-set-key "\M-O" 'open-line-above)
(global-set-key "\M-o" 'open-line-below)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Terminals
(add-hook 'shell-mode-hook 'ansi-color-for-comint-mode-on)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Paredit

(require 'paredit)

(eval-after-load 'paredit
  '(progn
     ;; Some paredit keybindings conflict with windmove and SLIME
     (define-key paredit-mode-map (kbd "<M-up>") nil)
     (define-key paredit-mode-map (kbd "<M-down>") nil)
     (define-key paredit-mode-map "\M-r" nil)))

(mapcar (lambda (hook) (add-hook hook 'enable-paredit-mode))
        '(clojure-mode-hook lisp-mode-hook slime-repl-mode-hook emacs-lisp-mode-hook))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Ruby

;(require 'ruby-mode)

;(define-key ruby-mode-map "\C-m" 'reindent-then-newline-and-indent)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; CSS

(defun electric-brace (arg)
  (interactive "P")
    ;; insert a brace
  (self-insert-command 1)
  ;; maybe do electric behavior
  (css-indent-line))

(require 'css-mode)
(define-key css-mode-map "}" 'electric-brace)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Generic Lisp / Emacs Lisp
;; from http://www.emacswiki.org/emacs/AutoIndentation

(defadvice yank (after indent-region activate)
  (if (member major-mode '(clojure-mode emacs-lisp-mode lisp-mode))
      (let ((mark-even-if-inactive t))
        (indent-region (region-beginning) (region-end) nil)))) 

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Clojure

(autoload 'clojure-test-mode "clojure-test-mode" "Clojure test mode" t)
(autoload 'clojure-test-maybe-enable "clojure-test-mode" "" t)
(add-hook 'clojure-mode-hook 'clojure-test-maybe-enable)

(setq swank-clojure-library-paths
      (if (string= window-system "w32")
          (list "native/windows/x86_64")
        (list "native/linux/x86_64")))

;;(setq swank-clojure-extra-vm-args (list "-Dfile.encoding=UTF8"))

;(eval-after-load "slime"
;  '(progn
;     (require 'swank-clojure-extra)
;     
;     (add-hook 'slime-indentation-update-hooks 'swank-clojure-update-indentation)
;     (add-hook 'slime-repl-mode-hook 'swank-clojure-slime-repl-modify-syntax t)
;     (add-hook 'clojure-mode-hook 'swank-clojure-slime-mode-hook t)
;     (setq slime-highlight-compiler-notes nil)))

;(defun clojure ()
;  (interactive)
;  (setq swank-clojure-classpath
;        (if (file-exists-p "lib")
;            (list "~/.clojure" "." "src" "test" "lib/*" "lib/dev/*" "classes" "native" "/usr/local/lib/*")
;          (list "~/.clojure" "~/code/playground/lib/*" "~/code/playground/lib/dev/*")))
;  (add-to-list 'slime-lisp-implementations
;               `(clojure ,(swank-clojure-cmd)
;                         :init swank-clojure-init)
;               t)
;  (swank-clojure-project default-directory))

(add-to-list 'slime-lisp-implementations '(sbcl ("/usr/bin/sbcl")))

(defvar slime-override-map (make-keymap))
(define-minor-mode slime-override-mode
  "Fix SLIME REPL keybindings"
  nil " SLIME-override" slime-override-map)
(define-key slime-override-map (kbd "<C-return>") 'paredit-newline)
(define-key slime-override-map (kbd "{") 'paredit-open-curly)
(define-key slime-override-map (kbd "}") 'paredit-close-curly)
(define-key slime-override-map [delete] 'paredit-forward-delete)
(define-key slime-override-map [backspace] 'paredit-backward-delete)
;;(define-key slime-override-map (kbd "<C-return>") 'paredit-newline)
;;(define-key slime-override-map "\C-j" 'slime-repl-return)

(add-hook 'slime-repl-mode-hook (lambda ()
                                  (slime-override-mode t)
                                  (slime-redirect-inferior-output)
                                  (modify-syntax-entry ?\[ "(]")
                                  (modify-syntax-entry ?\] ")[")
                                  (modify-syntax-entry ?\{ "(}")
                                  (modify-syntax-entry ?\} "){")))

;;(setq auto-mode-alist
;;      (cons '("\.clj$" . clojure-mode)
;;            auto-mode-alist))

(setq current-language-environment "UTF-8")

;;(set-language-environment "UTF-8")
(setq slime-net-coding-system 'utf-8-unix) 
(slime-setup '(slime-repl))
;;(add-hook 'slime-connected-hook 'slime-redirect-inferior-output) 

(defun lisp-enable-paredit-hook () (paredit-mode 1))
(add-hook 'clojure-mode-hook 'lisp-enable-paredit-hook)

(defmacro defclojureface (name color desc &optional others)
  `(defface ,name '((((class color)) (:foreground ,color ,@others))) ,desc :group 'faces))

(defclojureface clojure-parens       "#b8bb00"   "Clojure parens") ;; DimGrey
(defclojureface clojure-braces       "#49b2c7"   "Clojure braces")
(defclojureface clojure-brackets     "SteelBlue" "Clojure brackets")
(defclojureface clojure-keyword      "khaki"     "Clojure keywords")
(defclojureface clojure-namespace    "#c476f1"   "Clojure namespace")
(defclojureface clojure-java-call    "#4bcf68"   "Clojure Java calls")
(defclojureface clojure-special      "#b8bb00"   "Clojure special")
(defclojureface clojure-double-quote "#b8bb00"   "Clojure special" (:background "unspecified"))

(defun tweak-clojure-syntax ()
  (mapcar (lambda (x) (font-lock-add-keywords nil x))
          '((("#?['`]*(\\|)"       . 'clojure-parens))
            (("#?\\^?{\\|}"        . 'clojure-brackets))
            (("\\[\\|\\]"          . 'clojure-braces))
            ((":\\w+"              . 'clojure-keyword))
            (("#?\""               0 'clojure-double-quote prepend))
            (("nil\\|true\\|false\\|%[1-9]?" . 'clojure-special))
            (("(\\(\\.[^ \n)]*\\|[^ \n)]+\\.\\|new\\)\\([ )\n]\\|$\\)" 1 'clojure-java-call))
            )))

(add-hook 'clojure-mode-hook 'tweak-clojure-syntax)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Custom
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(case-fold-search t)
 '(clojure-mode-use-backtracking-indent t)
 '(comint-scroll-to-bottom-on-input t)
 '(custom-safe-themes (quote ("c1e8be651e81c0dac7783e49d3a93c5f6091b828" default)))
 '(epa-file-cache-passphrase-for-symmetric-encryption t)
 '(epg-gpg-program "C:/cygwin/bin/gpg")
 '(fancy-splash-image "")
 '(ido-decorations (quote ("" "" " | " " | ..." "[" "]" " [No match]" " [Matched]" " [Not readable]" " [Too big]" " [Confirm]")))
 '(ido-everywhere t)
 
 '(inhibit-startup-screen t)
 '(lisp-loop-forms-indentation 6)
 '(lisp-loop-keyword-indentation 6)
 '(lisp-simple-loop-indentation 6)
 '(mode-line-format (quote ("%e--[" mode-line-buffer-identification "]" (vc-mode vc-mode) "  " mode-line-modes global-mode-string " %-")))
 '(mode-line-in-non-selected-windows t)
 '(mode-line-modes (quote ("%[" "(" (:propertize ("" mode-name)) ("" mode-line-process) (:propertize ("" minor-mode-alist)) "%n" ")" "%]")))
 '(mouse-wheel-progressive-speed nil)
 '(nav-width 79)
 '(require-final-newline t)
 '(savehist-mode t nil (savehist))
 '(scroll-bar-mode 1)
 '(scroll-conservatively 100000)
 '(scroll-down-aggressively 0.0)
 '(scroll-margin 0)
 '(scroll-step 1)
 '(scroll-up-aggressively 0.0)
 '(show-paren-mode t nil (paren))
 '(slime-compilation-finished-hook nil)
 '(uniquify-buffer-name-style (quote post-forward) nil (uniquify)))

;;'(inferior-lisp-program "java -cp C:/Users/CSSOSNS/.m2/repository/org/clojure/clojure/1.2.0/closure.jar;C:/Users/CSSOSNS/.m2/repository/org/clojure-contrib/clojure-contrib.jar clojure.main")
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(slime-highlight-edits-face ((((class color) (background dark)) (:background "#202020")))))

(defalias 'list-buffers 'ibuffer) 
(setq ibuffer-shrink-to-minimum-size t) 
(setq ibuffer-always-show-last-buffer nil) 
(setq ibuffer-sorting-mode 'recency) 
(setq ibuffer-use-header-line t)

;; ========== Enable Line and Column Numbering ==========
;; Show line-number in the mode line
(line-number-mode 1)
;; Show column-number in the mode line
(column-number-mode 1)


;; ========== Set the fill column ==========

;; Enable backup files.
(setq-default fill-column 100)


 ;; ===== Automatically load abbreviations table =====

;; Note that emacs chooses, by default, the filename
;; "~/.abbrev_defs", so don't try to be too clever
;; by changing its name

(setq-default abbrev-mode t)
;(read-abbrev-file "~/.abbrev_defs")
(setq save-abbrevs t)

;; ===== Set the highlight current line minor mode =====

;; In every buffer, the line which contains the cursor will be fully
;; highlighted

(global-hl-line-mode 1)


;;(setq org-remember-templates
;;      '(("Todo" ?t "* TODO %?\n  %U\n %i\n  %a" m:/org "Tasks")
;;        ("Journal" ?j "* %U %?\n\n  %i\n  %a" "m:/org/JOURNAL.org")
;;        ("Idea" ?i "* %^{Title}\n  %i\n  %a" "m:/org/JOURNAL.org" "New Ideas")))

;; (org-remember-insinuate) ;; not needed after org-capture

(setq load-path (cons "~/.emacs.d/org-7.5/lisp" load-path))


(setq org-capture-templates
      '(("t" "Todo" entry (file+headline "m:/org/myNotes.org" "Tasks")
         "* TODO %?\n  %i\n  %a")
        ("j" "Journal" entry (file+datetree "m:/org/journal.org")
         "* %?\nEntered on %U\n  %i\n  %a")))

(setq org-directory "m:/org/")
(setq org-default-notes-file (concat org-directory "myNotes.org"))
(define-key global-map "\C-cc" 'org-capture)

;; agenda files
(setq org-agenda-files (list  (concat org-directory "myNotes.org") 
                              (concat org-directory "GDT/GDT_notes.org")))

;;(require 'remember)
;;(add-to-list 'load-path "d:/emacs/lisp/remember")

;;(define-key global-map "\C-cr" 'org-remember)

(add-hook 'org-mode-hook 'turn-on-auto-fill)

;; Org-mode settings
(add-to-list 'auto-mode-alist '("\\.org$" . org-mode))
(global-set-key "\C-cl" 'org-store-link)
(global-set-key "\C-cc" 'org-capture)
(global-set-key "\C-ca" 'org-agenda)
(global-set-key "\C-cb" 'org-iswitchb)
(global-font-lock-mode 1)


;;(setq org-log-done 'note)

(setq org-log-done 'note)
(setq org-log-done 'time)
(setq org-todo-keywords
      '((sequence "TODO(t)" "STARTED(s@/!)" "WAITING(w@/!)" "DELEGATED(e@/!)" "APPT(@!)" "|"  "DONE(d!)" "DEFERRED" "CANCELLED(c@)")))


(eval-after-load "org-agenda"
  '(progn
     (define-key org-agenda-mode-map "\C-n" 'next-line)
     (define-key org-agenda-keymap "\C-n" 'next-line)
     (define-key org-agenda-mode-map "\C-p" 'previous-line)
     (define-key org-agenda-keymap "\C-p" 'previous-line)
     )
  )

;; EasyPG
;;(add-to-list 'load-path "d:/emacs/lisp/epg")
;;(require 'epa-setup)

;; Emacs 23: bundled EasyPG
(require 'epa)
(epa-file-enable)
(setq epa-file-cache-passphrase-for-symmetric-encryption t)



(global-set-key "\C-l" 'goto-line) ; [Ctrl]-[L] 

(defun geosoft-parse-minibuffer () 
  ;; Extension to the complete word facility of the minibuffer 
  (interactive) 
  (backward-char 4) 
  (setq found t) 
  (cond 
     ; local directories 
     ((looking-at "..cd") (setq directory "m:/")) 
     ((looking-at ".org") (setq directory "m:/org/")) 
     ((looking-at "sp") (setq directory "m:/Spring/")) 
     (t (setq found nil))) 
  (cond (found (beginning-of-line) 
                (kill-line) 
                (insert directory)) 
         (t     (forward-char 4) 
                (minibuffer-complete)))) 

(define-key minibuffer-local-completion-map " " 'geosoft-parse-minibuffer) 

;; buffer switcher
(defvar LIMIT 1) 
(defvar time 0) 
(defvar mylist nil) 

(defun time-now () 
   (car (cdr (current-time)))) 

(defun bubble-buffer () 
   (interactive) 
   (if (or (> (- (time-now) time) LIMIT) (null mylist)) 
       (progn (setq mylist (copy-alist (buffer-list))) 
         	 (delq (get-buffer " *Minibuf-0*") mylist) 
         	 (delq (get-buffer " *Minibuf-1*") mylist))) 
   (bury-buffer (car mylist)) 
   (setq mylist (cdr mylist)) 
   (setq newtop (car mylist)) 
   (switch-to-buffer (car mylist)) 
   (setq rest (cdr (copy-alist mylist))) 
   (while rest 
     (bury-buffer (car rest)) 
     (setq rest (cdr rest))) 
   (setq time (time-now))) 

(global-set-key [f4] 'bubble-buffer) 


(ido-mode 1)


;;(other-window 1)
;;(find-file "/Users/mdk/Documents/org/myNotes.org.gpg")

;;recentf
(require 'recentf)
(recentf-mode 1)
(setq recentf-max-saved-items 500)
(setq recentf-max-menu-items 60)
(global-set-key [(meta f12)] 'recentf-open-files)

(defun xsteve-ido-choose-from-recentf ()
  "Use ido to select a recently opened file from the `recentf-list'"
  (interactive)
  (let ((home (expand-file-name (getenv "HOME"))))
    (find-file
     (ido-completing-read "Recentf open: "
                          (mapcar (lambda (path)
                                    (replace-regexp-in-string home "~" path))
                                  recentf-list)
                          nil t))))

(global-set-key [(meta f11)] 'xsteve-ido-choose-from-recentf)


(when (require 'bubble-buffer nil t)
  (global-set-key [meta f4] 'bubble-buffer-next)
  (global-set-key [(meta shift f4)] 'bubble-buffer-previous))
(setq bubble-buffer-omit-regexp "\\(^ .+$\\|\\*Messages\\*\\|*compilation\\*\\|\\*.+output\\*$\\|\\*TeX Help\\*$\\|\\*vc-diff\\*\\|\\*Occur\\*\\|\\*grep\\*\\|\\*cvs-diff\\*\\)")

(defun tjc-duplicate-line (&optional arg)
"Copy current line beneath itself. Move point to new copy of line in exact same position as previous line."
(interactive "P")
(let ((orig (point)))
(beginning-of-line)
(let ((beg (point)))
(end-of-line)
(let ((end (point)))
(copy-region-as-kill beg end)
(newline)
(yank)
;; Place point on copied line at column where point was on
;; previous line.
(goto-char (+ orig (- end orig) (- orig beg) 1))))))


(global-set-key [(meta f5)] 'tjc-duplicate-line)


(defun insert-time ()
  (interactive)
  (insert (format-time-string "%Y-%m-%d-%R")))

(global-set-key (kbd "C-c t") 'insert-time)

(defun notes () 
  (interactive) 
  (find-file "m:/org/myNotes.org"))

(defun go-LearnEmacs () 
  (interactive) 
  (find-file "m:/org/learn_emacs.org.gpg"))


(defun .emacs () 
  (interactive) 
  (find-file "~/.emacs"))

(defun go-spring-certification-notes () 
  (interactive) 
  (find-file "m:/org/Spring_Certification_Notes.org"))

(defun go-gdt() 
  (interactive) 
  (find-file "m:/org/GDT/GDT_notes.org"))

(defun go-dev () 
  (interactive) 
  (find-file "L:/java/TopCoder/contest_and_submission_entities_1.2.0_dev_dist/notes.org"))




(put 'upcase-region 'disabled nil)




;;; This was installed by package-install.el.
;;; This provides support for the package system and
;;; interfacing with ELPA, the package archive.
;;; Move this code earlier if you want to reference
;;; packages in your .emacs.
;;(when
;;    (load
;;     (expand-file-name "~/.emacs.d/elpa/package.el"))
;;  (package-initialize))


(windmove-default-keybindings 'meta)


;; android-mode
;;(add-to-list 'load-path "~/opt/android-mode")
;;(require 'android-mode)
;;(defcustom android-mode-sdk-dir "/user/lib/android")


;(princ mac-command-modifier)


;(define-key global-map (kbd "<f12>") 'list-buffers )
;(define-key global-map (kbd "C-c b") 'ibuffer)
(global-set-key [(meta f10)] 'ibuffer)


                                        ; elein
;; http://blog.gaz-jones.com/post/2486737162/setting-up-clojure-development-on-osx-using-emacs-and
;; https://github.com/remvee/elein
;;(add-to-list 'load-path "~/.emacs.d/elein" )
;;(require 'elein)

(filesets-init)

;;http://jakemccrary.com/blog/2010/12/07/quickily-starting-a-powerful-clojure-repl.html
(defun clojure-swank ()
  "Launch swank-clojure from users homedir/.lein/bin"
  (interactive)
  (let ((buffer (get-buffer-create "*clojure-swank*")))
    (flet ((display-buffer (buffer-or-name &optional not-this-window frame) nil))
      (bury-buffer buffer)
      (shell-command "c:/cygwin/home/CSSOSNS/.lein/bin/swank-clojure.bat &" buffer))
    (set-process-filter (get-buffer-process buffer)
                        (lambda (process output)
                          (with-current-buffer "*clojure-swank*" (insert output))
                          (when (string-match "Connection opened on local port +\\([0-9]+\\)" output)
                            (slime-connect "localhost" (match-string 1 output))
                            (set-process-filter process nil))))
    (message "Starting swank.. ")))


(defun clojure-kill-swank ()
  "Kill swank process started by lein swank."
  (interactive)
  (let ((process (get-buffer-process "*clojure-swank*")))
    (when process
      (ignore-errors (slime-quit-lisp))
      (let ((timeout 10))
        (while (and (> timeout 0)
                    (eql 'run (process-status process)))
          (sit-for 1)
          (decf timeout)))
      (ignore-errors (kill-buffer "*clojure-swank*")))))



;;; This was installed by package-install.el.
;;; This provides support for the package system and
;;; interfacing with ELPA, the package archive.
;;; Move this code earlier if you want to reference
;;; packages in your .emacs.

;;(when
;;    (load
;;     (expand-file-name "~/.emacs.d/elpa/package.el"))
;;  (package-initialize))

;; http://www.mail-archive.com/clojure@googlegroups.com/msg36929.html
;; fix the PATH variable
(defun set-exec-path-from-shell-PATH ()
  (let ((path-from-shell (shell-command-to-string "$SHELL -i -c 'echo $PATH'")))
    (setenv "PATH" path-from-shell)
    (setq exec-path (split-string path-from-shell path-separator))))

;;(if window-system (set-exec-path-from-shell-PATH))

;; http://blog.vanntett.net/2010/09/22/automating-emacs.html
(defun save-macro (name keybinding)                  
  "save latest macro defined macro and a keybinding to it to .emacs"
  (interactive "SName of the macro: \nSKey binding for macro %s: ")
  (kmacro-name-last-macro name)
  (find-file "~/.emacs.d/.emacs")
  (goto-char (point-max))
  (newline)              
  (insert-kbd-macro name)
  (newline)
  (insert (format "(global-set-key (kbd \"%s\") '%s)" keybinding name))
  (newline)
  (save-buffer)
  (switch-to-buffer nil)
  (load-file "~/.emacs.d/.emacs")
  (shell-command "cd ~/.emacs.d;git pull origin master;git commit -am 'added macro to .emacs';git push;")
  (kill-buffer "*Shell Command Output*"))

;;(cua-mode nil)

(color-theme-calm-forest)

;; compile and goto repl
(fset 'compile-and-goto-repl
      "\C-x\C-s\C-c\C-k\C-c\C-z")
(global-set-key [f6] 'compile-and-goto-repl)


;; http://stackoverflow.com/questions/2596222/how-to-reload-files-upon-save-when-using-swankleiningenemacs
;; But I can't get it to work. Don't know why.
;;(defun clojure-slime-maybe-compile-and-load-file ()
;;  "Call function `slime-compile-and-load-file' if current buffer is connected to a swank server.                                                          ;;     Meant to be used in `after-save-hook'."
;;  (when (and (eq major-mode 'clojure-mode) (slime-connected-p))
;;    (slime-compile-and-load-file)))

;; (add-hook 'after-save-hook 'clojure-slime-maybe-compile-and-load-file)

;;(load(expand-file-name "~/.emacs.d/zenburn.el" ))
;;(require 'zenburn)
;;(zenburn)

;;(server-start)

;;http://www.martyn.se/code/emacs/darkroom-mode/
(add-to-list 'load-path "~/.emacs.d/darkroom-mode")
(require 'darkroom-mode)
;; M-x dark-room      (toggle dark-room)
;; M-x w32-fullscreen (toggle fullscreen)


(server-start)
(add-to-list 'load-path "D:/emacs-23.3/lisp/org/org-protocol.el")
(require 'org-protocol)

(require 'auto-install)
(setq auto-install-save-confirm nil)


;;(add-to-list 'load-path "~/.emacs.d/icicles/")
;;(require 'icicles)
;;(icy-mode 1)

;;(load "~/.emacs.d/icicles-install")

;; db2
;; http://www.ibm.com/developerworks/data/library/techarticle/0206mathew/0206mathew.html
;;; Change the path to db2cmd to reflect the correct 
;;; location for your machine. 
(setq sql-db2-program "C:/IBM/SQLLIB/BIN/db2cmd.exe") 

;;; The interesting options here is the "-t" option 
;;; passed to "db2". This is extremely handy - it 
;;; means that ';' (semicolon) ; is treated as the command 
;;; line terminator. The default is to treat the end-of-line 
;;; as a SQL statement terminator. 
;;; You may look up the command reference online for an 
;;; explanation of the rest. 
(setq sql-db2-options '("-c" "-i" "-w" "db2" "-tv")) 

;;(load "~/.emacs.d/package.el")

;; http://marmalade-repo.org/
;;(add-to-list 'package-archives '("marmalade" . "http://marmalade-repo.org/packages/"))

;;(setq load-path (cons "~/.emacs.d/sellout-emacs-color-theme-solarized-26260c0" load-path))
(setq load-path (cons "~/.emacs.d/emacs-color-theme-solarized" load-path))
(require 'color-theme-solarized)

;; M-x color-theme-solarized-[light|dark]

;; git-emacs
(setq load-path (cons "~/.emacs.d/git-emacs" load-path))
(require 'git-emacs)

;; magit
(setq load-path (cons "~/.emacs.d/magit-1.0.0" load-path))
(require 'magit)

(defun now ()
  "Insert string for the current time formatted like '2:34 PM'."
  (interactive)                 ; permit invocation in minibuffer
  (insert (format-time-string "%D %-I:%M %p")))

(defun today ()
  "Insert string for today's date nicely formatted in American style,
e.g. Sunday, September 17, 2000."
  (interactive)                 ; permit invocation in minibuffer
  (insert (format-time-string "%A, %B %e, %Y")))

;; yasnippets
(add-to-list 'load-path "~/.emacs.d/yasnippet-0.6.1c")
(require 'yasnippet) ;; not yasnippet-bundle
(yas/initialize)
(yas/load-directory "~/.emacs.d/yasnippet-0.6.1c/snippets")
(global-set-key [(control c) (meta s)] 'yas/insert-snippet)

(require 'package)
(add-to-list 'package-archives '("marmalade" . "http://marmalade-repo.org/packages/"))
(package-initialize)

(print "I'm inside init.el")


(setq stack-trace-on-error t)

(defconst ecb-cedet-required-version-max '(1 2 4 9))


;;http://code.google.com/p/emacs-nav/  
(add-to-list 'load-path "~/.emacs.d/emacs-nav-20110220")
(require 'nav)
;; Type M-x nav to start navigating.


(add-to-list 'auto-mode-alist '("\.cljs$" . clojure-mode))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Allow input to be sent to somewhere other than inferior-lisp
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; This is a total hack: we're hardcoding the name of the shell buffer
(defun shell-send-input (input)
  "Send INPUT into the *shell* buffer and leave it visible."
  (save-selected-window
    (switch-to-buffer-other-window "*shell*")
    (goto-char (point-max))
    (insert input)
    (comint-send-input)))

(defun defun-at-point ()
  "Return the text of the defun at point."
  (apply #'buffer-substring-no-properties
         (region-for-defun-at-point)))

(defun region-for-defun-at-point ()
  "Return the start and end position of defun at point."
  (save-excursion
    (save-match-data
      (end-of-defun)
      (let ((end (point)))
        (beginning-of-defun)
        (list (point) end)))))

(defun expression-preceding-point ()
  "Return the expression preceding point as a string."
  (buffer-substring-no-properties
   (save-excursion (backward-sexp) (point))
   (point)))

(defun shell-eval-last-expression ()
  "Send the expression preceding point to the *shell* buffer."
  (interactive)
  (shell-send-input (expression-preceding-point)))

(defun shell-eval-defun ()
  "Send the current toplevel expression to the *shell* buffer."
  (interactive)
  (shell-send-input (defun-at-point)))

(add-hook 'clojure-mode-hook
          '(lambda ()
             (define-key clojure-mode-map (kbd "C-c e") 'shell-eval-last-expression)
             (define-key clojure-mode-map (kbd "C-c x") 'shell-eval-defun)))

;;;;;;;;;;;;;;;;;;


(add-to-list 'load-path (expand-file-name ".emacs.d" "~"))

(autoload 'clojure-mode "clojure-mode" "A major mode for Clojure" t)
(add-to-list 'auto-mode-alist '("\.clj$" . clojure-mode))

(setq inferior-lisp-program "lein repl")

(add-hook 'clojure-mode-hook
          '(lambda ()
             (setq indent-tabs-mode nil)
             (define-key clojure-mode-map "\C-c\C-e" 'lisp-eval-last-sexp)
             (define-key clojure-mode-map "\C-x\C-e" 'lisp-eval-last-sexp)
             (define-key clojure-mode-map  [f8] 'lisp-eval-last-sexp)))

(defvar one-home "d:/docs/Clojure/projects/one")


(defun one () 
  (interactive)
  (cd one-home)
  
  (find-file (concat one-home "/src/app/clj/one/sample/config.clj"))
  (split-window-above-each-other)
  (other-window 1)
  (inferior-lisp "lein repl")
  (other-window 1)
  (split-window-side-by-side)
  (other-window 1)
  (find-file (concat one-home "/src/app/cljs/one/sample/core.cljs"))
  (other-window 1)
  (split-window-side-by-side)
  (other-window 1)
  (cd one-home)
  (shell)
  (other-window 3)
  ;(nav)
  )

(defun a () 
  (interactive)
  (cd "d:/docs/Clojure/projects/one")
  (find-file "src/app/clj/one/sample/config.clj")
  (split-window-above-each-other)
  
  (other-window 1)
  (find-file "src/app/clj/one/sample/api.clj")
  (other-window 1)
  (split-window-side-by-side)
  (other-window 1)
  (find-file "src/app/cljs/one/sample/core.cljs")
  (other-window 1)
  (split-window-side-by-side)
  (other-window 1)
  (find-file "~/.emacs")
  )

;(one)
(put 'set-goal-column 'disabled nil)

;; http://www.learningclojure.com/2009/12/favourite-keys-for-emacs-and-slime.html
;;bind the slime selector to f12 and add a method for finding clojure buffers
(define-key global-map (kbd "<f12>") 'slime-selector)
(def-slime-selector-method ?j
  "most recently visited clojure-mode buffer."
  (slime-recently-visited-buffer 'clojure-mode))

(defun dev () 
  (interactive)
  (cd "~/dev-notes")
  (find-file "~/dev-notes/dev.org"))

(global-set-key "\M-\S-n" 'dev)
