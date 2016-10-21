webpackJsonp([112],{162:function(s,a){var n,t,l={};s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]);var p="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;t&&(p.template=t),p.computed||(p.computed={}),Object.keys(l).forEach(function(s){var a=l[s];p.computed[s]=function(){return a}})},32:function(s,a,n){s.exports=n(162),'<h1>Field</h1>\n<blockquote>\n<p>Form field.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Field } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Field.name, Field);\n</code></pre>\n<h2>Usage</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input username"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"phone"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input tel"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"tel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"website"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input website"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"url"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input number"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input birthday"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"introduction"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"introduction"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>Configure validation results</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"error"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>Custom content</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"captcha"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"45px"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100px"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type of the input</td>\n<td>String</td>\n<td>text, number, email, url, tel, date, datetime, password, textarea</td>\n<td>text</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>value for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rows</td>\n<td>rows attribute of textarea</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>place holder for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disableClear</td>\n<td>disable the clear button</td>\n<td>Booean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>readonly</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disabled</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>state</td>\n<td>validation result</td>\n<td>String</td>\n<td>error, success, warning</td>\n<td></td>\n</tr>\n<tr>\n<td>attr</td>\n<td>set native attributes. e.g. <code>:attr=&quot;{ maxlength: 10 }&quot;</code></td>\n<td>Object</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>displayed text</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Field</h1>\n<blockquote>\n<p>Form field.</p>\n</blockquote>\n<hr>\n<h2>Import</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Field } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Field.name, Field);\n</code></pre>\n<h2>Usage</h2>\n<p>Basic usage</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input username"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"phone"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input tel"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"tel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"website"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input website"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"url"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input number"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"birthday"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Input birthday"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"introduction"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"introduction"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"textarea"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>Configure validation results</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"error"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">state</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<p>Custom content</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"captcha"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"../assets/100x100.png"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"45px"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"100px"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-field</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>option</th>\n<th>description</th>\n<th>type</th>\n<th>acceptable values</th>\n<th>default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>type of the input</td>\n<td>String</td>\n<td>text, number, email, url, tel, date, datetime, password, textarea</td>\n<td>text</td>\n</tr>\n<tr>\n<td>label</td>\n<td>label for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>value for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>rows</td>\n<td>rows attribute of textarea</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>place holder for the input</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disableClear</td>\n<td>disable the clear button</td>\n<td>Booean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>readonly</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>disabled</td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>state</td>\n<td>validation result</td>\n<td>String</td>\n<td>error, success, warning</td>\n<td></td>\n</tr>\n<tr>\n<td>attr</td>\n<td>set native attributes. e.g. <code>:attr=&quot;{ maxlength: 10 }&quot;</code></td>\n<td>Object</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>displayed text</td>\n</tr>\n</tbody>\n</table></div>')}});