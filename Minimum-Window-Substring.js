var minWindow = function(s, t) {
    let need = new Map();
    let window = new Map();

    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let valid = 0;
    let start = 0, len = Infinity;

    while (right < s.length) {
        let c = s[right];
        right++;

        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 👇 This must be INSIDE the main loop
        while (valid === need.size) {
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            let d = s[left];
            left++;

            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    return len === Infinity ? \\ : s.substring(start, start + len);
};
