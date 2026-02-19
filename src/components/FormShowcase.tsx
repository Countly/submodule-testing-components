import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
      {children}
    </p>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <SectionLabel>{title}</SectionLabel>
      {children}
    </div>
  );
}

export function FormShowcase() {
  const [sliderValue, setSliderValue] = useState([60]);
  const [progress] = useState(72);
  const [switchOn, setSwitchOn] = useState(false);
  const [checkboxes, setCheckboxes] = useState({ a: true, b: false, c: false });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-primary" />
            <span className="font-semibold text-foreground tracking-tight">FormKit</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">v1.0</Badge>
            <Badge>Minimal</Badge>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-border bg-accent/30">
        <div className="max-w-5xl mx-auto px-8 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Component Library</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
            Form Elements
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            A minimal, clean set of form primitives. Copy, paste, compose.
          </p>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-5xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Buttons */}
          <Section title="Buttons">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled</Button>
            </div>
          </Section>

          {/* Inputs */}
          <Section title="Text Inputs">
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Default</Label>
                <Input placeholder="Enter text…" />
              </div>
              <div className="space-y-1.5">
                <Label>With value</Label>
                <Input defaultValue="hello@example.com" />
              </div>
              <div className="space-y-1.5">
                <Label>Password</Label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground">Disabled</Label>
                <Input disabled placeholder="Not editable" />
              </div>
            </div>
          </Section>

          {/* Textarea */}
          <Section title="Textarea">
            <div className="space-y-1.5">
              <Label>Message</Label>
              <Textarea placeholder="Write something…" rows={4} />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Disabled</Label>
              <Textarea disabled placeholder="Not editable" rows={2} />
            </div>
          </Section>

          {/* Select */}
          <Section title="Select">
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Choose an option</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="cherry">Cherry</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Role</Label>
                <Select defaultValue="editor">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Section>

          {/* Checkbox */}
          <Section title="Checkbox">
            <div className="space-y-3">
              {[
                { id: "a", label: "Receive email updates" },
                { id: "b", label: "Enable notifications" },
                { id: "c", label: "Share usage data" },
              ].map(({ id, label }) => (
                <div key={id} className="flex items-center gap-3">
                  <Checkbox
                    id={id}
                    checked={checkboxes[id as keyof typeof checkboxes]}
                    onCheckedChange={(v) =>
                      setCheckboxes((prev) => ({ ...prev, [id]: !!v }))
                    }
                  />
                  <Label htmlFor={id} className="font-normal cursor-pointer">{label}</Label>
                </div>
              ))}
            </div>
          </Section>

          {/* Radio */}
          <Section title="Radio Group">
            <RadioGroup defaultValue="monthly">
              {[
                { value: "monthly", label: "Monthly" },
                { value: "yearly", label: "Yearly" },
                { value: "lifetime", label: "Lifetime" },
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center gap-3">
                  <RadioGroupItem value={value} id={`radio-${value}`} />
                  <Label htmlFor={`radio-${value}`} className="font-normal cursor-pointer">{label}</Label>
                </div>
              ))}
            </RadioGroup>
          </Section>

          {/* Switch */}
          <Section title="Switch">
            <div className="space-y-4">
              {[
                { label: "Dark mode", desc: "Enable dark theme across the UI" },
                { label: "Notifications", desc: "Receive push notifications" },
              ].map(({ label, desc }, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                  <Switch
                    checked={i === 0 ? switchOn : false}
                    onCheckedChange={i === 0 ? setSwitchOn : undefined}
                  />
                </div>
              ))}
            </div>
          </Section>

          {/* Slider */}
          <Section title="Slider">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>Volume</Label>
                  <span className="text-sm text-muted-foreground">{sliderValue[0]}%</span>
                </div>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>Fixed example</Label>
                  <span className="text-sm text-muted-foreground">40%</span>
                </div>
                <Slider defaultValue={[40]} max={100} step={10} />
              </div>
            </div>
          </Section>

          {/* Progress */}
          <Section title="Progress">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Upload progress</span>
                  <span className="font-medium">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile completion</span>
                  <span className="font-medium">30%</span>
                </div>
                <Progress value={30} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage used</span>
                  <span className="font-medium">95%</span>
                </div>
                <Progress value={95} className="[&>div]:bg-destructive" />
              </div>
            </div>
          </Section>

          {/* Badges */}
          <Section title="Badges">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Error</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Active</Badge>
              <Badge className="bg-muted text-muted-foreground">Draft</Badge>
              <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">Archived</Badge>
            </div>
          </Section>

          {/* Full form example */}
          <div className="md:col-span-2">
            <Section title="Composed Form Example">
              <div className="border border-border rounded-lg p-6 bg-card space-y-5 max-w-md">
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Create account</h3>
                  <p className="text-sm text-muted-foreground">Fill in your details below.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>First name</Label>
                    <Input placeholder="Ada" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Last name</Label>
                    <Input placeholder="Lovelace" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Email</Label>
                  <Input type="email" placeholder="ada@example.com" />
                </div>
                <div className="space-y-1.5">
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role…" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-normal cursor-pointer text-sm">
                    I agree to the <span className="text-primary underline underline-offset-2 cursor-pointer">terms of service</span>
                  </Label>
                </div>
                <div className="flex gap-3 pt-1">
                  <Button className="flex-1">Create account</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </Section>
          </div>

        </div>
      </main>

      <footer className="border-t border-border mt-4 py-8">
        <div className="max-w-5xl mx-auto px-8 text-sm text-muted-foreground text-center">
          FormKit — minimal green component library
        </div>
      </footer>
    </div>
  );
}
