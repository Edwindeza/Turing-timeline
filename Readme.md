# Timeline Component

## How to run the project

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open browser at `http://localhost:1234`

## What I like about this implementation

I really enjoyed this challenge, it was quite fun for my taste since I had never built something similar to a Gantt chart before. Usually challenges are simple CRUDs or basic algorithms.
I managed to structure the project in a maintainable way that feels right for a small feature like this.
I also created reusable functions that work across different components in a simple way without increasing re-renders using useRef. All this without sacrificing readability.

The `useTimeline` hook encapsulates all the complex logic for lane calculation and positioning, while the components stay clean and focused on their specific responsibilities.

The zoom functionality feels very natural too. Being able to zoom with the mouse wheel or buttons feels intuitive, and the tooltip that shows the date when you hover over the timeline adds a lot of value without complicating the interface.

The color gradient system to differentiate tasks also works well. It's not too flashy but helps visually distinguish adjacent elements.

## What I would change if I did it again

I would definitely implement drag and drop to change the dates of elements. It was one of the suggested features that looked interesting but I didn't have time to complete it since I was out when I got the challenge and lost about an hour in traffic coming back home.

I would also add the ability to edit names inline. Currently you can only view them, but it would be useful to click and modify the text directly.

In technical terms, I would probably use a state management library like Zustand to handle the timeline state if this were to scale. With few elements it works well with hooks, but with hundreds of tasks and multiple views it would become more complex.

If it were a larger project, like a full Gantt chart, I would modularize every aspect with a screaming architecture or screaming modular architecture which are my favorites and allow quick adaptation to any programming team. This facilitates long-term maintenance.

## Design decisions

I was mainly inspired by Gantt diagrams I've seen in tools like Monday.com and Asana, since I didn't have more time to think about it. I used subtle gradients instead of flat colors and added smooth transitions in the date tooltip.

The typography follows Apple's native system because it looks clean on any device and doesn't require loading external fonts.

For responsive layout I decided to keep things simple. Zoom makes everything easier, allowing anyone to modify it to their liking, whether on mobile or web since there's a physical controller to enlarge or reduce it.

I kept the lane algorithm basic but effective: it sorts by start date and assigns each element to the first available lane. It's O(n²) in the worst case but works perfectly for small datasets like the example.

## How I would test this with more time

I would implement unit tests for utility functions, especially `assignLanes` and `calculateDateRange` which contain the most critical logic. I would also add integration tests with React Testing Library to verify that components render correctly with different datasets.

For visual testing I would use Storybook with different scenarios: timeline with many elements, overlapping elements, very short elements, elements with long names, etc.

I would also do performance testing with large datasets to identify possible bottlenecks and optimize rendering if necessary.

Accessibility tests would be important too, verifying that it works well with keyboard navigation and screen readers.
