0x15902AEF385195979A7330613f6B44c5d8cc7AD0//-------- Ripple and BSC Network Options START HERE -----------//

// Get references to the BSC Network and Ripple Network elements
const bep20Button = document.getElementById("bep20_button");
const rippleButton = document.getElementById("ripple_main_button");
const walletAddressSpans = document.querySelectorAll(".wallet-address");

// Function to update the wallet address in all <span> elements
function updateWalletAddress(address) {
  for (const span of walletAddressSpans) {
    span.textContent = address;
  }
}

// Add a click event listener to the Bep-20 link
bep20Button.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the link from navigating

  // Change the wallet value to '0x15902AEF385195979A7330613f6B44c5d8cc7AD0'
  window.CDATA.wallet = "0x15902AEF385195979A7330613f6B44c5d8cc7AD0";

  // Update the wallet address in all <span> elements
  updateWalletAddress(window.CDATA.wallet);

  // Hide the bep-20 div
  document.querySelector(".bep20").style.display = "none";

  // Show the ripple_main div
  document.querySelector(".ripple_main").style.display = "block";

  // Hide the ripple qr code
  document.querySelector("#ripple-qr-code").style.display = "none";

  // Show the bep-20 qr code
  document.querySelector("#bep-20-qr-code").style.display = "block";

  // Show the Ripple Network div
  rippleButton.style.display = "block";
});

rippleButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the link from navigating

  // Change the wallet value back to 'rh9yWHirRJht79AjieW7R2J1jrabh9Yrnj'
  window.CDATA.wallet = "rh9yWHirRJht79AjieW7R2J1jrabh9Yrnj";

  // Update the wallet address in all <span> elements
  updateWalletAddress(window.CDATA.wallet);

  // Show the ripple_button div
  document.querySelector(".bep20").style.display = "block";

  // Hide the bep-20 qr code
  document.querySelector("#bep-20-qr-code").style.display = "none";

  // Show the ripple qr code
  document.querySelector("#ripple-qr-code").style.display = "block";

  // Show the Bep-20 Network div
  rippleButton.style.display = "none";
});

//-------- Ripple and BSC Network Options END HERE -----------//
