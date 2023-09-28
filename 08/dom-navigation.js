
//dom дерево має доступ і до тегів, і до тексту, і до коментарів
//вузли дом-дерева: 
//елемент Element, текст Text, коментар Comment, документ Document
//скопіювати з 03_DOM 001 childNote

// Основные типы узлов
        // Интерфейс           | Константа nodeType            | Значение nodeType
        // ------------------------------------------------------------------------
        // Element             | Node.ELEMENT_NODE             | 1
        // Text                | Node.TEXT_NODE                | 3
        // Comment             | Node.COMMENT_NODE             | 8
        // Document            | Node.DOCUMENT_NODE            | 9
        // ------------------------------------------------------------------------

        // Свойства для навигации по DOM

        // childNodes - массив всех дочерних узлов
        // firstChild - первый дочерний узел
        // firstElementChild - 
        // nextElementSibling
        // children - Все дочерние элементы
        // lastChild - последний дочерний узел
        // nextSibling - следующий узел расположенный на одном уровне с текущим
        // previousSibling - предыдущий узел расположенный на одном уровне с текущим
        // parentNode - родительский узел для текущего элемента


/*
    <ul>
        <li>first</li>
        <li>second</li>
    </ul>
    ul.childNodes = text,li,text,li,text - рахує пробіли і переноси за text
    ur.childNodes element = li,li
    ul.children - всі li, тобто elements
    .firstElemtnChild
*/ 