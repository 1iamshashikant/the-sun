 int n = nums.length;
        int perfectTeams = 0;

        // i am considerin in this code  all possible teams of two students
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                int sum = nums[i] + nums[j];
                if (sum % 3 == 0) {
                    perfectTeams++;
                }
            }
        }

        // in this code i am considering  all possible teams of three students
        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    int sum = nums[i] + nums[j] + nums[k];
                    if (sum % 3 == 0) {
                        perfectTeams++;
                    }
                }
            }
        }

        return perfectTeams;