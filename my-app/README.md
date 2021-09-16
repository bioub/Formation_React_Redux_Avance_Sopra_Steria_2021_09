# Exercices

## Refs

Ajouter une ref sur le champ de formulaire du composant `TodoForm` et appeler la méthode `.focus()` du `HTMLInputElement` référencé pour que le focus se trouve sur le champs au chargement du composant

## Render props

- Ajouter une render prop nommée `renderItem` à `Select`, utiliser cette fonction quand elle est définie pour faire le rendu de l'item, y mettre en gras l'élément sélectionné.

- De même ajouter une renderProp nommée `renderSelected` au composant `Select` pour le rendu de l'élément sélectionné.

## Context

Modifier le composant `Select` du composant `Home` qui recevra 2 valeurs possibles :

- `"primary"`
- `"secondary"`

Créer un context `ColorContext` comme dans le projet `react-communication` et modifier la prop `color` du `AppBar` présent dans le composant `TopBar` en fonction de la valeur sélrctionnée dans le `Select` de `Home`

## Higher Order Component

Comme dans le projet `react-communication`, créer un Higher Order Component nommé `withColor` pour récupérer la valeur de `ColorContext` dans la `TopBar`.

## Hooks de bases

Reprendre le code du composant `Select`

Remplacer `state` et `setState` par le hook `useState`.

Remplacer `componentDidMount` par le hook `useEffect`

Remplacer `createRef` par le hook `useRef`.

