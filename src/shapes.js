const shapesArray= [{
    id: 1,
    name: "circle",
    svg: <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 2,
    name: "square",
    svg: <rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 3,
    name: "triangle",
    svg: <polygon points="50,10 90,90 10,90" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 4,
    name: "star",
    svg: <polygon points="50,5 63,38 100,38 69,59 82,91 50,72 18,91 31,59 0,38 37,38" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 5,
    name: "rectangle",
    svg: <rect x="10" y="20" width="80" height="60" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 6,
    name: "heart",
    svg: <path d="M 50 90 C 20 70, 20 40, 50 20 C 80 40, 80 70, 50 90 Z" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 7,
    name: "hexagon",
    svg: <polygon points="25,10 75,10 100,50 75,90 25,90 0,50" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 8,
    name: "oval",
    svg: <ellipse cx="50" cy="50" rx="40" ry="20" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 9,
    name: "pentagon",
    svg: <polygon points="50,5 95,38 82,91 18,91 5,38" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 10,
    name: "cross",
    svg: <polygon points="10,35 35,35 35,10 65,10 65,35 90,35 90,65 65,65 65,90 35,90 35,65 10,65" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 11,
    name: "diamond",
    svg: <polygon points="50,10 90,50 50,90 10,50" stroke="black" strokeWidth="2" fill="none" />
  },
  {
    id: 12,
    name: "parallelogram",
    svg: <polygon points="25,10 75,10 100,90 50,90" stroke="black" strokeWidth="2" fill="none" />
  }
]

export default shapesArray;