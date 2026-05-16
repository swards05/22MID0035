function knapsack(tasks, hours) {

    const n = tasks.length;

    const dp = Array(n + 1)
        .fill()
        .map(() => Array(hours + 1).fill(0));

    for (let i = 1; i <= n; i++) {

        const duration = tasks[i - 1].Duration;
        const impact = tasks[i - 1].Impact;

        for (let h = 0; h <= hours; h++) {

            if (duration <= h) {

                dp[i][h] = Math.max(
                    impact + dp[i - 1][h - duration],
                    dp[i - 1][h]
                );

            } else {
                dp[i][h] = dp[i - 1][h];
            }
        }
    }

    return dp[n][hours];
}

module.exports = knapsack;