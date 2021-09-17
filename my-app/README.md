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

## Performances

Au moment ou le composant disparait du DOM, appeler la méthode `removeEventListener` sur l'objet `document`

Utiliser la fonction `memo` sur le composant `Select` pour éviter les render inutiles.

Transformer le class component `Home`, en function component

Utiliser la fonction `useCallback` sur le parent de `Select` pour éviter de repasser une nouvelle fonction `onSelected` et `renderItem` + `renderSelected`(à faire une fois si c'est la même fonction) à chaque render de `Home`

Lazy Loader `Home` en utilisant `React.lazy` et `Suspense`.


## Redux

Sur le modèle de TODO_ADD, utiliser createAction pour générer l'action create todoAdd et utiliser createReducer pour générer inputReducer.

Créer les actions et reducer pour supprimer une todo, le déclencher au click du bouton moins de l'item.

Installer et activer redux-persist de telle sorte à ce que le state persiste dans le localStorage (suivre simplement le QuickStart Basique) :
https://github.com/rt2zz/redux-persist#basic-usage

