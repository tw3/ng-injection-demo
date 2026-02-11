import { Component, computed, input } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.scss',
})
export class CodeSnippetComponent {
  code = input.required<string>();
  title = input<string>('');
  language = input<string>('typescript');

  highlightedCode = computed(() => {
    const lang = this.language();
    const grammar = Prism.languages[lang];
    if (grammar) {
      return Prism.highlight(this.code(), grammar, lang);
    }
    return this.code();
  });
}
