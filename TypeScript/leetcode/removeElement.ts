// uses two pointers
function removeElement(nums: number[], val: number): number {
    let k = 0; // Compteur pour les éléments non égaux à `val`
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Déplace l'élément non égal à `val` au début
            k++;
        }
    }
    console.log(nums);
    return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
