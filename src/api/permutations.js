const permutations = [
    {
        name: "Ua",
        letter: "U",
        algorithm: "(R U' R U) R U (R U' R' U') R2",
        arrows: "U3U7-s7,U7U5-s7,U5U3-s7",
        types: [
            "all-corners-solved",
            "headlights",
            "3x1-block"
        ],
        probability: 4
    },
    {
        name: "Ub",
        letter: "U",
        algorithm: "R2 U (R U R' U') R' U' (R' U R')",
        arrows: "U7U3-s7,U5U7-s7,U3U5-s7",
        types: [
            "all-corners-solved",
            "headlights",
            "3x1-block"
        ],
        probability: 4
    },

    {
        name: "Z",
        letter: "Z",
        algorithm: "(M2' U M2' U) (M' U2) (M2' U2 M') [U2]",
        arrows: "U1U3,U3U1,U5U7,U7U5",
        types: [
            "all-corners-solved",
            "headlights"
        ],
        probability: 2
    },

    {
        name: "H",
        letter: "H",
        algorithm: "(M2' U M2') U2 (M2' U M2')",
        arrows: "U1U7,U7U1,U3U5,U5U3",
        types: [
            "all-corners-solved",
            "headlights"
        ],
        probability: 1
    },

    {
        name: "Aa",
        letter: "A",
        algorithm: "x (R' U R') D2 (R U' R') D2 R2 x'",
        arrows: "U0U2-s8,U2U8-s8,U8U0-s8",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
            "2x2-block"
        ],
        probability: 4
    },
    {
        name: "Ab",
        letter: "A",
        algorithm: "x R2' D2 (R U R') D2 (R U' R) x'",
        arrows: "U2U0-s8,U8U2-s8,U0U8-s8",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
            "2x2-block"
        ],
        probability: 4
    },

    {
        name: "E",
        letter: "E",
        algorithm: "x' (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') x",
        arrows: "U0U6,U6U0,U2U8,U8U2",
        types: [
            "opposite-corners-swapped"
        ],
        probability: 2
    },

    {
        name: "Ra",
        letter: "R",
        algorithm: "(R U' R' U') (R U R D) (R' U' R D') (R' U2 R') [U']",
        arrows: "U1U3,U3U1,U2U8,U8U2",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },
    {
        name: "Rb",
        letter: "R",
        algorithm: "(R' U2 R U2') R' F (R U R' U') R' F' R2 [U']",
        arrows: "U0U2,U2U0,U5U7,U7U5",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },

    {
        name: "Ja",
        letter: "J",
        algorithm: "(R' U L' U2) (R U' R' U2 R) L [U']",
        arrows: "U1U3-s7,U3U1-s7,U0U2,U2U0",
        types: [
            "adjacent-corners-swapped",
            "3x1-block",
            "2x1-block"
        ],
        probability: 4
    },
    {
        name: "Jb",
        letter: "J",
        algorithm: "(R U R' F') (R U R' U') R' F R2 U' R' [U']",
        arrows: "U2U8,U8U2,U5U7,U7U5",
        types: [
            "adjacent-corners-swapped",
            "3x1-block",
            "2x1-block"
        ],
        probability: 4
    },

    {
        name: "T",
        letter: "T",
        algorithm: "(R U R' U') (R' F R2 U') R' U' (R U R' F')",
        arrows: "U3U5,U5U3,U2U8,U8U2",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },

    {
        name: "F",
        letter: "F",
        algorithm: "(R' U' F')(R U R' U')(R' F R2 U')(R' U' R U)(R' U R)",
        arrows: "U1U7,U7U1,U2U8,U8U2",
        types: [
            "adjacent-corners-swapped",
            "3x1-block",
        ],
        probability: 4
    },

    {
        name: "V",
        letter: "V",
        algorithm: "(R' U R' U') y (R' F' R2 U') (R' U R' F) R F",
        arrows: "U0U8,U8U0,U1U5,U5U1",
        types: [
            "opposite-corners-swapped",
            "2x1-block",
            "2x2-block"
        ],
        probability: 4
    },

    {
        name: "Y",
        letter: "Y",
        algorithm: "F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')",
        arrows: "U0U8,U8U0,U1U3,U3U1",
        types: [
            "opposite-corners-swapped",
            "2x1-block",
        ],
        probability: 4
    },

    {
        name: "Na",
        letter: "N",
        algorithm: "(RUR'U)(RUR'F')(RUR'U')(R'FR2U') R' U2 (RU'R')",
        arrows: "U6U2,U2U6,U3U5,U5U3",
        types: [
            "opposite-corners-swapped",
            "2x1-block",
        ],
        probability: 1
    },
    {
        name: "Nb",
        letter: "N",
        algorithm: "(R' U R U') (R' F' U' F) (R U R' F) R' F' (R U' R)",
        arrows: "U0U8,U8U0,U3U5,U5U3",
        types: [
            "opposite-corners-swapped",
            "2x1-block",
        ],
        probability: 1
    },

    {
        name: "Ga",
        letter: "G",
        algorithm: "R2 U (R' U R' U') (R U' R2) D U' (R' U R D') [U]",
        arrows: "U1U3-s8,U5U1-s8,U3U5-s8,U0U2-s7,U6U0-s7,U2U6-s7",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },
    {
        name: "Gb",
        letter: "G",
        algorithm: "(F' U' F) (R2 u R' U) (R U' R u') R2'",
        arrows: "U3U1-s8,U1U5-s8,U5U3-s8,U2U0-s7,U0U6-s7,U6U2-s7",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },
    {
        name: "Gc",
        letter: "G",
        algorithm: "R2 U' (R U' R U) (R' U R2 D') (U R U' R') D [U']",
        arrows: "U7U3-s8,U5U7-s8,U3U5--s8,U8U0-s7,U0U6-s7,U6U8-s7",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    },
    {
        name: "Gd",
        letter: "G",
        algorithm: "D' (R U R' U') D (R2 U' R U') (R' U R' U) R2 [U]",
        arrows: "U0U2-s8,U2U6-s8,U6U0-s8,U7U1-s7,U1U3-s7,U3U7-s7",
        types: [
            "adjacent-corners-swapped",
            "headlights",
            "2x1-block",
        ],
        probability: 4
    }
];

export default permutations;
