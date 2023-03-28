interface SignUpWithLogoProp {
  iconName: string;
}

function SignUpWithLogo({ iconName }: SignUpWithLogoProp) {
  return (
    <div className="p-6 border m-2 border-gray150  text-gray900 rounded-2xl cursor-pointer">
      <div className="grid">
        <ion-icon name={iconName} type="logo" size="large" />
      </div>
    </div>
  );
}

export default SignUpWithLogo;
