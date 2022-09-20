async function main() {
  // ethers 라이브러리로 fundraising 컨트랙을 가져와 컴파일 한 후
  const Fundraising = await ethers.getContractFactory("Fundraising");
  // 한 개의 argument와 함께 deploy. () 안에 값이 목표 금액
  const contract = await Fundraising.deploy(100000000000);
  console.log("Contract address is:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
